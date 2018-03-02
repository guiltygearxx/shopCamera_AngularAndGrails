import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ListProductLogic} from "./list-product-logic";
import {ProductService} from "../../service/product/product.service";
import {Product} from "../../bean/product";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent extends ListProductLogic implements OnInit {

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected productService: ProductService) {
    super(productService);
  }

  ngOnInit() {

    let categoryId: string = this.route.snapshot.paramMap.get("categoryId");

    console.log(categoryId);

    this.getListProduct(categoryId);
  }

  goToChiTietSanPham(): void {

    this.router.navigate(["", "chiTietSanPham"]);
  }


  afterGetListProduct(product: Product[]): void {
    super.afterGetListProduct(product);

    console.log(JSON.stringify(this.productList));

  }
}
