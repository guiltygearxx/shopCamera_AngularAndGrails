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

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent
  extends ListProductLogic implements OnInit, AfterContentChecked {

  detailForms: OrderDetailForm;

  get inputParams(): ListProductInputParams {

    return this.listProductService.inputParams;
  }

  private isCategoryLoaded: boolean = false;

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

    this.filterForm = new ListProductFilterForm();


    this.getListCategory();
  }

  ngAfterContentChecked(): void {

    if (this.listProductService.isInputParamsChanged && this.isCategoryLoaded) {

      this.getListProduct();
    }
  }

  addProductToOrder(productView: ProductView): void {

    this.detailForms = this.converterProductView(productView);

    return this.gioHangService.addOrderDetail(this.detailForms);
  }

  private converterProductView(productView: ProductView): OrderDetailForm {

    let orderDetail = new OrderDetailForm();

    orderDetail.productId = productView.id;
    orderDetail.name = productView.name;
    orderDetail.image1 = productView.image1
    orderDetail.gia = productView.gia;

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

  afterGetListProduct(productViews: ProductView[]): void {

    super.afterGetListProduct(productViews);
  }

  getListProduct(): void {

    this.listProductService.isInputParamsChanged = false;

    this.filterForm = new ListProductFilterForm();

    let categoryItems = this.categoryList;

    let pageTitle: string;

    if (!this.applicationUtils.isStringEmpty(this.inputParams.subCategory)) {

      let category = categoryItems.find((item) => item.code == this.inputParams.subCategory);

      pageTitle = category.name;

      this.filterForm.categoryIds = category.id;

    } else if (!this.applicationUtils.isStringEmpty(this.inputParams.categoryCode)) {

      let category = categoryItems.find((item) => item.code == this.inputParams.categoryCode);

      let categoryIds: string[] = [category.id];

      categoryItems.forEach((item) => {

        if (item.parentCategoryId == category.id) categoryIds.push(item.id);
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
}
