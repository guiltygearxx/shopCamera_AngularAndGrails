import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {ProductViewService} from "../../service/product/product-view.service";
import {ListProductFilterForm} from "../../bean/list-product-filter-form";
import {ApplicationUtils} from "../../common/application-utils";
import {GioHangService} from "../../service/order/gio-hang.service";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {isNullOrUndefined} from "util";
import {Attribute} from "../../bean/attribute";
import {AttributeService} from "../../service/attribute.service";
import {NumberFormatter} from "../../common/formater/number-formatter";
import {SupportPaginationTable} from "../../common/support-pagination-table";
import {SupportSortingTable} from "../../common/support-sorting-table";
import {PaginationParams} from "../../common/pagination-params";
import {SortableTableFlow} from "../../common/sortable-table-flow";
import {SimpleObject} from "../../common/simple-object";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";

const SORT_OPTIONS = [

  new SimpleObject("", "Mặc định"),
  new SimpleObject("gia;asc", "Giá tăng dần"),
  new SimpleObject("gia;desc", "Giá giảm dần")
];

const MAXPAGESIZE_OPTIONS = [

  new SimpleObject("10", "10"),
  new SimpleObject("20", "20"),
  new SimpleObject("30", "30"),
  new SimpleObject("40", "40"),
];

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent
  implements OnInit, SupportPaginationTable, SupportSortingTable, AfterContentChecked, SupportBreadcrumbs {

  breadcrumbs: Breadcrumb[];

  filterForm: ListProductFilterForm;

  sortOptions: SimpleObject[];

  filterValues: { [code: string]: string[] };

  priceRange: number[];

  allowDisplayProductVetical: boolean;

  categoryName: string;

  subCategoryList: CategoryItem[];

  categoryList: CategoryItem[];

  productList: ProductView[];

  detailForms: OrderDetailForm;

  contentCategory: string;

  typeOfCategory: string;

  attributes: Attribute[];

  selectedCategory: CategoryItem;

  filterAttributes: Attribute[];

  hasFilterValues: boolean;

  filterValuesTemp: { [code: string]: string[] };

  priceRangeTemp: number[];

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
              protected applicationUtils: ApplicationUtils,
              protected attributeService: AttributeService,
              protected numberFormater: NumberFormatter,
              protected sortableTableFlow: SortableTableFlow,
              protected route: ActivatedRoute,
              protected breadcrumbsUtils: BreadcrumbsUtilsService) {

  }

  ngOnInit() {

    this.sortOptions = SORT_OPTIONS;

    this.categoryList = [];

    this.allowDisplayProductVetical = false;

    this.filterForm = new ListProductFilterForm();

    this.filterValuesTemp = {};

    this.priceRangeTemp = [0, 1000];

    this.priceRange = [0, 1000];

    this.filterValues = {};

    this.curPageIndex = 0;

    this.maxPageSize = +(this.maxPageSizeStr = "10");

    this.sortOption = "";

    this.sort = this.order = null;
  }

  ngAfterContentChecked(): void {

    let currentCategoryId: string = this.route.snapshot.paramMap.get("categoryId");

    if (currentCategoryId != this.filterForm.categoryId) {

      this.filterValuesTemp = {};

      this.priceRangeTemp = [0, 1000];

      this.priceRange = [0, 1000];

      this.filterValues = {};

      this.curPageIndex = 0;

      this.maxPageSize = +(this.maxPageSizeStr = "10");

      this.sortOption = "";

      this.sort = this.order = null;

      this.filterForm.categoryId = currentCategoryId;

      this.getListCategory();

      this.loadAttributes();
    }
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtils.breadcrumbSelected(breadcrumb);
  }

  changeDisplayProductStyle(style: boolean): boolean {

    return this.allowDisplayProductVetical = style;
  }

  addProductToOrder(productView: ProductView): void {

    this.detailForms = this.converterProductView(productView);

    return this.gioHangService.addOrderDetail(this.detailForms);
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

  getGiaKhuyenMai(product: ProductView): number {

    return isNullOrUndefined(product.gia) ? 0 : ((product.giaTruocKhiHa || 0) - product.gia);
  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(['/chiTietSanPham', productView.id]);
    });

  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    let selectedCategoryId = this.filterForm.categoryId;

    let selectedCategory = this.selectedCategory = categoryItems.find((item) => item.id == selectedCategoryId);

    this.subCategoryList = categoryItems.filter((item) => item.parentCategoryId == selectedCategoryId);

    this.contentCategory = this.selectedCategory.content;

    this.categoryName = this.selectedCategory.name;

    this.typeOfCategory = this.selectedCategory.type;

    let subCategoryIds = (this.subCategoryList || []).map((item) => item.id);

    this.filterForm.categoryIds = [selectedCategoryId].concat(subCategoryIds).join(";");

    this.getListProduct();

    let parentCategoryItem = categoryItems.find((item) => item.id == selectedCategory.parentCategoryId);

    this.breadcrumbs = this.breadcrumbsUtils.generateBreadcrumbs(
      "danhSachSanPham",
      parentCategoryItem ? [parentCategoryItem, selectedCategory] : [selectedCategory]
    );
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

    return !isNullOrUndefined(product.phanTramGiamGia);
  }

  goToSubCategory(event: any, subCategory: CategoryItem): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/danhSachSanPham/", subCategory.id]);
    });
  }

  filterChange(): void {

    this.filterValues = {};

    Object.keys(this.filterValuesTemp).forEach((key) => this.filterValues[key] = (this.filterValuesTemp[key] || []).slice());

    this.priceRange = this.priceRangeTemp.slice();

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

    this.priceRange = [0, 1000];

    this.priceRangeTemp = [0, 1000];

    this.getListProduct();

    this.initFilterAttributes();

    this.initHasFilterValues();
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

  goToPage(event: any): void {

    let pageIndex: number = event;

    this.sortableTableFlow.goToPage(this, pageIndex);
  }

  sortOptionsChanged(event: any): void {

    this.curPageIndex = 0;

    if (this.applicationUtils.isStringEmpty(this.sortOption)) {

      this.sort = this.order = null;

    } else {

      let elements = this.sortOption.split(";");

      this.sort = elements[0];

      this.order = elements[1];
    }

    this.doSort_();
  }

  maxPageSizeStrChanged(event: any): void {

    this.maxPageSize = +this.maxPageSizeStr;

    this.curPageIndex = 0;

    this.doSort_();
  }

  getPriceRangeLabel(): string {

    return [this.applicationUtils.formatNumber2(this.priceRange[0], 2),
      this.applicationUtils.formatNumber2(this.priceRange[1], 2)].join(" - ") + (" triệu");
  }

  resetPriceRange(event): void {

    event.preventDefault();

    this.priceRange = [0, 1000];

    this.priceRangeTemp = [0, 1000];

    this.getListProduct();
  }

  isEnablePriceRangeFilterChoice(): boolean {

    return this.priceRange[0] != 0 || this.priceRange[1] != 1000;
  }


  private converterProductView(productView: ProductView): OrderDetailForm {

    let orderDetail = new OrderDetailForm();

    orderDetail.productId = productView.id;
    orderDetail.name = productView.name;
    orderDetail.hinhAnh = productView.image1
    orderDetail.gia = productView.gia.toString();

    return orderDetail;

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

    let categoryType = isNullOrUndefined(this.selectedCategory) ? null : this.selectedCategory.type;

    this.filterAttributes = this.attributes.filter((item) => {

      if (item.group != categoryType) return false;

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

    params["categoryGroup"] = this.selectedCategory.type;
  }

  private buildPaginationParams(): PaginationParams {

    return this.sortableTableFlow.buildPaginationParams(this);
  }
}
