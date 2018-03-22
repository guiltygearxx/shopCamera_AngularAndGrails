import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListProductLogic} from "./list-product-logic";
import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {ProductViewService} from "../../service/product/product-view.service";
import {OrderService} from "../../service/order/order.service";
import {ListProductService} from "../../service/list-product.service";
import {ListProductFilterForm} from "../../bean/list-product-filter-form";
import {ListProductInputParams} from "../../bean/list-product-input-params";
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent
  extends ListProductLogic implements OnInit, AfterContentChecked {

  inputParams: ListProductInputParams;

  private isCategoryLoaded: boolean = false;

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected productListService: ProductViewService,
              protected categoryService: CategoryService,
              protected orderService: OrderService,
              protected listProductService: ListProductService,
              protected applicationUtils: ApplicationUtils) {

    super(productListService, categoryService);
  }

  ngOnInit() {

    this.filterForm = new ListProductFilterForm();

    this.inputParams = this.listProductService.inputParams;

    this.getListCategory();
  }

  ngAfterContentChecked(): void {

    if (this.listProductService.isInputParamsChanged && this.isCategoryLoaded) {

      this.getListProduct();
    }
  }

  addCount(): number {

    return this.orderService.addCount();
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

    this.listProductService.isInputParamsChanged = false;
  }

  getListProduct(): void {

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
