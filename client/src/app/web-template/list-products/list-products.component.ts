import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListProductLogic} from "./list-product-logic";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../bean/product";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent extends ListProductLogic implements OnInit {

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected productService: ProductService,
              protected categoryService: CategoryService) {
    super(productService, categoryService);
  }

  ngOnInit() {

    this.getListCategory();
  }

  goToChiTietSanPham(event: any, product: Product): void {

    event.preventDefault();

    this.router.navigate(["/chiTietSanPham", product.id]);
  }


  afterGetListCategory(categoryItems: CategoryItem[]): void {
    super.afterGetListCategory(categoryItems);


    let categoryCode: string = this.route.snapshot.paramMap.get("categoryCode");

    let categoryItem = this.categoryList.find((category) => category.code == categoryCode);

    this.categoryName = categoryItem.name;

    this.getListProduct(categoryItem.id);
  }

  isAvailbaleProduct(): Product[] {

    if (isNullOrUndefined(this.productList)) return null;

    return this.productList;
  }


}
