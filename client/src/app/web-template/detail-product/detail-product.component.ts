import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product/product.service";
import {DetailProductLogic} from "./detail-product-logic";
import {ActivatedRoute} from "@angular/router";
import {isNullOrUndefined} from "util";

declare var $: any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent extends DetailProductLogic implements OnInit {

  constructor(protected productService: ProductService,
              protected route: ActivatedRoute) {
    super(productService);
  }

  ngOnInit() {

    let productId: string = this.route.snapshot.paramMap.get("productId");

    this.getProductById(productId);
  }

  isAvailbaleProduct(): boolean {
    if (isNullOrUndefined(this.product)) return false;
    return true;
  }

}
