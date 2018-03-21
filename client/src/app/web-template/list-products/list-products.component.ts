import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListProductLogic} from "./list-product-logic";
import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {ProductViewService} from "../../service/product/product-view.service";
import {OrderService} from "../../service/order/order.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent extends ListProductLogic implements OnInit {

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected productListService: ProductViewService,
              protected categoryService: CategoryService, protected orderService:OrderService) {
    super(productListService, categoryService);
  }

  ngOnInit() {

    // let categoryCode: string = this.route.snapshot.paramMap.get("categoryCode");
    //
    // this.route.params
    //   .map(params => params['categoryCode'])
    //   .subscribe((id) => {
    //     this.categoryList.find((category) => category.code == categoryCode)
    //   });


    // console.log(categoryCode);

    this.getListCategory();
  }

  addCount():number{
    return this.orderService.addCount();
  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    this.router.navigate(["/chiTietSanPham", productView.id]);
  }


  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    let categoryCode: string = this.route.snapshot.paramMap.get("categoryCode");

    let subCategoryCode: string = this.route.snapshot.paramMap.get("subCategory");

    let paramsQuery: string = this.route.snapshot.paramMap.get("paramsQuery");


    if (!isNullOrUndefined(categoryCode)) {

      let categoryItem = this.categoryList.find((category) => category.code == categoryCode);

      this.categoryName = categoryItem.name;

      this.getListProduct(categoryItem.id);

    }

    if (!isNullOrUndefined(paramsQuery)) {

      this.categoryName = 'Tìm kiếm sản phẩm';

      this.getListProductByParamsQuery(paramsQuery);
    }


  }


}
