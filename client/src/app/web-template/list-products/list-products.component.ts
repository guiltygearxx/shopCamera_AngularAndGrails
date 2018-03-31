import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  get inputParams(): ListProductInputParams {

    return this.listProductService.inputParams;
  }

  private isCategoryLoaded: boolean = true;

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected productListService: ProductViewService,
              protected categoryService: CategoryService,
              protected gioHangService: GioHangService,
              protected listProductService: ListProductService,
              protected applicationUtils: ApplicationUtils) {

    super(productListService, categoryService);
  }

  ngOnInit() {

    this.allowDisplayProductVetical = true;

    this.filterForm = new ListProductFilterForm();


    this.getListCategory();

    this.khoangGia = [
      new ExampleObject("asc", "Giá tăng dần"),
      new ExampleObject("desc", "Giá giảm dần")
    ]
  }

  ngAfterContentChecked(): void {

    if (this.listProductService.isInputParamsChanged && this.isCategoryLoaded) {

      this.getListProduct();
    }
  }

  changeDisplayProductGridView():boolean{
    return this.allowDisplayProductVetical = true;
  }

  changeDisplayProductListView():boolean{
    return this.allowDisplayProductVetical = false;
  }

  addProductToOrder(productView: ProductView): void {

    this.detailForms = this.converterProductView(productView);

    return this.gioHangService.addOrderDetail(this.detailForms);
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

      let category = categoryItems.find((item) => item.code == this.inputParams.subCategory);

      this.getContentCategory(category.content);

      pageTitle = category.name;

      this.filterForm.categoryIds = category.id;

    } else if (!this.applicationUtils.isStringEmpty(this.inputParams.categoryCode)) {

      let category = categoryItems.find((item) => item.code == this.inputParams.categoryCode);

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

}
