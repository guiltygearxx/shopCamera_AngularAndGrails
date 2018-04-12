import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ListProductLogic} from "./list-product-logic";
import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {ProductViewService} from "../../service/product/product-view.service";
import {ListProductService} from "../../service/list-product.service";
import {ListProductFilterForm} from "../../bean/list-product-filter-form";
import {ListProductInputParams} from "../../bean/list-product-input-params";
import {ApplicationUtils} from "../../common/application-utils";
import {GioHangService} from "../../service/order/gio-hang.service";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {isNullOrUndefined} from "util";
import {ExampleObject} from "../../bean/example-object";
import {Attribute} from "../../bean/attribute";
import {AttributeService} from "../../service/attribute.service";
import {TrieuDongFormater} from "../../common/trieu-dong-formater";
import {NumberFormatter} from "../../service/formator/number-formatter";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent
  extends ListProductLogic implements OnInit, AfterContentChecked {

  detailForms: OrderDetailForm;

  contentCategory: string;

  typeOfCategory: string;

  private trieuDongFormatter: TrieuDongFormater;

  private numberFormater: NumberFormatter;

  attributes: Attribute[];

  selectedCategory: CategoryItem;

  filterAttributes: Attribute[];

  hasFilterValues: boolean;

  filterValuesTemp: { [code: string]: string[] };

  priceRangeTemp: number[];

  get inputParams(): ListProductInputParams {

    return this.listProductService.inputParams;
  }

  private isCategoryLoaded: boolean = true;

  constructor(private router: Router,
              protected productListService: ProductViewService,
              protected categoryService: CategoryService,
              protected gioHangService: GioHangService,
              protected listProductService: ListProductService,
              protected applicationUtils: ApplicationUtils,
              protected attributeService: AttributeService,
              protected applicationContext: ApplicationUtils,
  ) {

    super(productListService, categoryService, applicationUtils);
  }

  ngOnInit() {

    this.categoryList = [];

    this.allowDisplayProductVetical = true;

    this.filterForm = new ListProductFilterForm();

    this.numberFormater = this.applicationContext.defaultNumberFormatter;

    this.filterValuesTemp = {};

    this.priceRangeTemp = null;

    this.filterValues = {};

    this.priceRange = null;

    this.initFilterAttributes();

    this.initHasFilterValues();

    this.getListCategory();

    this.khoangGia = [
      new ExampleObject("asc", "Giá tăng dần"),
      new ExampleObject("desc", "Giá giảm dần")
    ]

    this.loadAttributes();
  }

  ngAfterContentChecked(): void {

    if (this.listProductService.isInputParamsChanged && this.isCategoryLoaded) {

      this.filterValuesTemp = {};

      this.filterValues = {};

      this.priceRange = null;

      this.priceRangeTemp = null;

      this.getListProduct();
    }
  }

  changeDisplayProductGridView(): boolean {
    return this.allowDisplayProductVetical = true;
  }

  changeDisplayProductListView(): boolean {
    return this.allowDisplayProductVetical = false;
  }

  addProductToOrder(productView: ProductView): void {

    this.detailForms = this.converterProductView(productView);

    return this.gioHangService.addOrderDetail(this.detailForms);
  }

  getTrieuDongFormatted(val: number): string {

    return this.trieuDongFormatter.format(val);
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

  getGiaKhuyenMai(product: ProductView): number {

    if (isNullOrUndefined(product.gia)) {

      return 0;

    } else {

      return (product.phanTramGiamGia * product.gia) / 100
    }
  }

  private converterProductView(productView: ProductView): OrderDetailForm {

    let orderDetail = new OrderDetailForm();

    orderDetail.productId = productView.id;
    orderDetail.name = productView.name;
    orderDetail.hinhAnh = productView.image1
    orderDetail.gia = productView.gia.toString();

    return orderDetail;

  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    this.router.navigate(["/chiTietSanPham", productView.id]);
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    this.isCategoryLoaded = true;

    this.getListProduct();
  }

  getContentCategory(contentCategory: string): void {

    if (!isNullOrUndefined(contentCategory)) {

      this.contentCategory = contentCategory;
    }
  }

  getTypeOfCategory(type: string): void {

    if (!isNullOrUndefined(type)) {

      this.typeOfCategory = type;
    }
  }

  getListProduct(): void {

    this.listProductService.isInputParamsChanged = false;

    this.filterForm = new ListProductFilterForm();

    let categoryItems = this.categoryList;

    this.subCategoryList = [];

    let pageTitle: string;

    if (!this.applicationUtils.isStringEmpty(this.inputParams.subCategory)) {

      let category = this.selectedCategory = categoryItems.find((item) => item.code == this.inputParams.subCategory);

      this.getContentCategory(category.content);

      pageTitle = category.name;

      this.filterForm.categoryIds = category.id;

    } else if (!this.applicationUtils.isStringEmpty(this.inputParams.categoryCode)) {

      let category = this.selectedCategory = categoryItems.find((item) => item.code == this.inputParams.categoryCode);

      this.getContentCategory(category.content);

      this.getTypeOfCategory(category.type);

      let categoryIds: string[] = [category.id];

      categoryItems.forEach((item) => {

        if (item.parentCategoryId == category.id) {
          categoryIds.push(item.id);
          this.subCategoryList.push(item);
        }
      })

      pageTitle = category.name;

      this.filterForm.categoryIds = categoryIds.join(";");

    } else if (!this.applicationUtils.isStringEmpty(this.inputParams.paramsQuery)) {

      pageTitle = 'Tìm kiếm sản phẩm';

      this.filterForm.paramsQuery = this.inputParams.paramsQuery;
    }

    this.categoryName = pageTitle;

    super.getListProduct();
  }

  afterGetListProduct(productViews: ProductView[]): void {

    super.afterGetListProduct(productViews);
  }

  kiemTraGiamGia(product: ProductView): boolean {

    if (isNullOrUndefined(product.phanTramGiamGia)) return false;

    return true;
  }

  goToSubCategory(event: any, subCategory: CategoryItem): void {

    event.preventDefault();

    this.listProductService.isInputParamsChanged = true;

    let inputParams: ListProductInputParams = this.listProductService.inputParams = new ListProductInputParams();

    inputParams.subCategory = isNullOrUndefined(subCategory) ? null : subCategory.code;

    this.router.navigate(["/danhSachSanPham"]);
  }

  filterChange(): void {

    let filterValues: any = this.filterValuesTemp;

    this.filterValues = {};

    Object.keys(filterValues).forEach((key) => this.filterValues[key] = filterValues[key]);

    this.priceRange = this.priceRangeTemp;

    this.getListProduct();

    this.initFilterAttributes();

    this.initHasFilterValues();
  }

  removeFilterValue(event: any, attribute: Attribute, filterValue: string): void {

    event.preventDefault();

    this.removeFilterValue_(this.filterValues, attribute, filterValue);

    this.removeFilterValue_(this.filterValuesTemp, attribute, filterValue);

    this.getListProduct();

    this.initFilterAttributes();

    this.initHasFilterValues();
  }

  resetFilterValue(event: any): void {

    event.preventDefault();

    this.filterValues = {};

    this.filterValuesTemp = {};

    this.priceRange = null;

    this.priceRangeTemp = null;

    this.getListProduct();

    this.initFilterAttributes();

    this.initHasFilterValues();
  }

  protected removeFilterValue_(filterValues: { [code: string]: string[] },
                               attribute: Attribute, filterValue: string): void {

    if (isNullOrUndefined(filterValues) || isNullOrUndefined(filterValues[attribute.code])) return;

    let index = filterValues[attribute.code].indexOf(filterValue);

    if (index != -1) filterValues[attribute.code].splice(index, 1);
  }

  protected loadAttributes(): void {

    this.attributeService.get().subscribe((attributes) => {

      this.attributes = attributes;

      this.initFilterAttributes();
    });
  }

  protected initFilterAttributes(): void {

    if (isNullOrUndefined(this.attributes) || isNullOrUndefined(this.filterValues)) {

      this.filterAttributes = [];

      return;
    }

    this.filterAttributes = this.attributes.filter((item) => {

      let values = this.filterValues[item.code];

      return !isNullOrUndefined(values) && values.length > 0;
    });
  }

  protected getFilterValues(attribute: Attribute): string[] {

    return isNullOrUndefined(this.filterValues) ? null : this.filterValues[attribute.code];
  }

  protected initHasFilterValues(): void {

    if (isNullOrUndefined(this.filterValues)) {

      this.hasFilterValues = false;

      return;
    }

    let hasFilterValuesKey = Object.keys(this.filterValues).find((key) => {

      let values = this.filterValues[key];

      return !isNullOrUndefined(values) && values.length > 0;
    });

    this.hasFilterValues = !isNullOrUndefined(hasFilterValuesKey);
  }
}
