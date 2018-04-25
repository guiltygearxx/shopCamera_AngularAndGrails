import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
import {Attribute} from "../../bean/attribute";
import {AttributeService} from "../../service/attribute.service";
import {TrieuDongFormater} from "../../common/trieu-dong-formater";
import {NumberFormatter} from "../../common/formater/number-formatter";
import {SupportPaginationTable} from "../../common/support-pagination-table";
import {SupportSortingTable} from "../../common/support-sorting-table";
import {PaginationParams} from "../../common/pagination-params";
import {SortableTableFlow} from "../../common/sortable-table-flow";
import {SimpleObject} from "../../common/simple-object";

const SORT_OPTIONS = [

  new SimpleObject("gia;asc", "Giá tăng dần"),
  new SimpleObject("gia;desc", "Giá giảm dần")
];

const MAXPAGESIZE_OPTIONS = [

  new SimpleObject("12", "12"),
  new SimpleObject("36", "36"),
  new SimpleObject("60", "60"),
  new SimpleObject("96", "96"),
];

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent
  implements OnInit, AfterContentChecked, SupportPaginationTable, SupportSortingTable {

  filterForm: ListProductFilterForm;

  sortOptions: SimpleObject[];

  filterValues: { [code: string]: string[] };

  priceRange: number[];

  allowDisplayProductVetical: boolean;

  categoryName: string;

  subCategoryList: CategoryItem[];

  categoryList: CategoryItem[];

  productList: ProductView[];

  giaTruocKhiHa: number;

  detailForms: OrderDetailForm;

  contentCategory: string;

  typeOfCategory: string;

  private trieuDongFormatter: TrieuDongFormater;

  attributes: Attribute[];

  selectedCategory: CategoryItem;

  filterAttributes: Attribute[];

  hasFilterValues: boolean;

  filterValuesTemp: { [code: string]: string[] };

  get inputParams(): ListProductInputParams {

    return this.listProductService.inputParams;
  }

  count: number;

  curPageIndex: number;

  maxPageSize: number;

  order: string;

  sort: string;

  sortOption: string;

  maxPageSizeOptions: SimpleObject[] = MAXPAGESIZE_OPTIONS;

  maxPageSizeStr: string;

  constructor(private router: Router,
              protected productViewService: ProductViewService,
              protected categoryService: CategoryService,
              protected gioHangService: GioHangService,
              protected listProductService: ListProductService,
              protected applicationUtils: ApplicationUtils,
              protected attributeService: AttributeService,
              protected numberFormater: NumberFormatter,
              protected sortableTableFlow: SortableTableFlow,
              protected route: ActivatedRoute) {

  }

  ngOnInit() {

    this.categoryList = [];

    this.allowDisplayProductVetical = true;

    this.filterForm = new ListProductFilterForm();

    this.filterForm.categoryId = this.route.snapshot.paramMap.get("categoryId");

    this.filterValuesTemp = {};

    this.filterValues = {};

    this.curPageIndex = 0;

    this.maxPageSize = +(this.maxPageSizeStr = "12");

    this.sortOption = "gia;asc";

    this.order = "asc";

    this.sort = "gia";

    this.initFilterAttributes();

    this.initHasFilterValues();

    this.getListCategory();

    this.sortOptions = SORT_OPTIONS

    this.loadAttributes();
  }

  ngAfterContentChecked(): void {

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

      this.giaTruocKhiHa = isNullOrUndefined(product.giaTruocKhiHa) ? 0 : Number.parseInt(product.giaTruocKhiHa);

      return (this.giaTruocKhiHa - product.gia);
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

    let selectedCategoryId = this.filterForm.categoryId;

    this.selectedCategory = categoryItems.find((item) => item.id == selectedCategoryId);

    this.subCategoryList = categoryItems.filter((item) => item.parentCategoryId == selectedCategoryId);

    this.contentCategory = this.selectedCategory.content;

    this.categoryName = this.selectedCategory.name;

    this.typeOfCategory = this.selectedCategory.type;

    let subCategoryIds = (this.subCategoryList || []).map((item) => item.id);

    this.filterForm.categoryIds = [selectedCategoryId].concat(subCategoryIds).join(";");

    this.getListProduct();
  }

  getListProduct(): void {

    let paginationParams = this.buildPaginationParams();

    let params = {categoryIds: this.filterForm.categoryIds, max: 100};

    this.buildParamsForFilter(params);

    this.productViewService
      .paginate(paginationParams, params)
      .subscribe((result) => {

        this.productList = result.pageData;

        this.sortableTableFlow.afterPaginate(this, result);
      });
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

  filterValuesChanged(filterValues: any): void {

    this.filterValues = {};

    Object.keys(filterValues).forEach((key) => this.filterValues[key] = filterValues[key]);

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

  protected buildParamsForFilter(params: any): void {

    Object.keys(this.filterValues).forEach((item) => params[item] = this.filterValues[item]);

    params["fromPrice"] = isNullOrUndefined(this.priceRange) ? null : this.priceRange[0];

    params["toPrice"] = isNullOrUndefined(this.priceRange) ? null : this.priceRange[1];
  }

  getListImageHighlight(productView: ProductView): string[] {

    if (isNullOrUndefined(productView) || this.applicationUtils.isStringEmpty(productView.hinhAnhTrucQuan)) return null;

    let dateElements: string[] = productView.hinhAnhTrucQuan.split(",");

    return dateElements;
  }

  getListCategory() {

    this.categoryService.get({max: 30}).subscribe((category) => this.afterGetListCategory(category));
  }

  _goToPage(): void {

    this.getListProduct();
  }

  doSort_(): void {

    this.getListProduct();
  }

  private buildPaginationParams(): PaginationParams {

    return this.sortableTableFlow.buildPaginationParams(this);
  }

  goToPage(event: any): void {

    let pageIndex: number = event;

    this.sortableTableFlow.goToPage(this, pageIndex);
  }

  sortOptionsChanged(event: any): void {

    this.curPageIndex = 0;

    let elements = this.sortOption.split(";");

    this.sort = elements[0];

    this.order = elements[1];

    this.doSort_();
  }

  maxPageSizeStrChanged(event: any): void {

    this.maxPageSize = +this.maxPageSizeStr;

    this.curPageIndex = 0;

    this.doSort_();
  }
}
