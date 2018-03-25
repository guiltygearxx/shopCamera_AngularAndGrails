import {Component, OnInit} from '@angular/core';
import {IndexContentLogic} from "./index-content-logic";
import {ProductViewService} from "../../service/product/product-view.service";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {Router} from "@angular/router";
import {ProductView} from "../../bean/product-view";
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";
import {ListProductInputParams} from "../../bean/list-product-input-params";
import {ListProductService} from "../../service/list-product.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent extends IndexContentLogic implements OnInit {

  constructor(private router: Router,
              protected productViewService: ProductViewService,
              protected categoryService: CategoryService,
              protected newsService: NewsService,
              protected listProductService: ListProductService) {

    super(productViewService, categoryService, newsService);
  }

  ngOnInit() {
    this.getListCategory();

    this.getListNews();

    this.activeImageIndex = 0;
    this.allowDisplayProductVetical = true;
    this.allowDisplayNews = true;

    // get list camera giam sat
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    this.getListProductCameraGiamSat("9a40cd52-99fe-42cc-bda3-5e43fb1f5439");

    this.getListProductGiaiPhapCamera("f2ea6507-8169-455a-92cd-0dfbeeee796c");

  }

  goToCategory(event: any, code: string): void {

    event.preventDefault();

    this.listProductService.isInputParamsChanged = true;

    let inputParams: ListProductInputParams = this.listProductService.inputParams = new ListProductInputParams();

    inputParams.categoryCode = code;

    this.router.navigate(["/danhSachSanPham"]);
  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    this.router.navigate(["/chiTietSanPham", productView.id]);
  }

  goToChiTietTinTuc(event: any, news: News): void {

    event.preventDefault();

    this.router.navigate(["/chiTietTinTuc", news.id]);
  }

  goToChiTietTinTucById(event: any, newsId: string): void {

    event.preventDefault();

    this.router.navigate(["/chiTietTinTuc", newsId]);
  }

  kiemTraGiamGia(product:ProductView):boolean{

    if(isNullOrUndefined(product.phanTramGiamGia)) return false;

    return true;
  }

}
