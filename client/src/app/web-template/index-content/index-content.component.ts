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
import {OrderDetailForm} from "../../bean/order-detail-form";
import {GioHangService} from "../../service/order/gio-hang.service";
import {ApplicationUtils} from "../../common/application-utils";
import {NumberFormatter} from "../../common/formater/number-formatter";
import {HttpService} from "../../common/http.service";

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent extends IndexContentLogic implements OnInit {

  giaTruocKhiHa: number;

  detailForms: OrderDetailForm;

  get isLoading(): boolean {

    return this.httpService.loadingFlag > 0;
  }

  constructor(private router: Router,
              protected productViewService: ProductViewService,
              protected categoryService: CategoryService,
              protected newsService: NewsService,
              protected listProductService: ListProductService,
              protected gioHangService: GioHangService,
              protected applicationUtils: ApplicationUtils,
              protected numberFormater: NumberFormatter,
              protected httpService: HttpService) {

    super(productViewService, categoryService, newsService);
  }

  ngOnInit() {

    this.getListCategory();

    this.getListNews();

    this.activeImageIndex = 0;

    this.allowDisplayProductVetical = true;

    this.allowDisplayNews = true;
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

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    this.getListProductSanPhamMoi("9a40cd52-99fe-42cc-bda3-5e43fb1f5439");

    this.getListProductKhuyenMai("f2ea6507-8169-455a-92cd-0dfbeeee796c");

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

  kiemTraGiamGia(product: ProductView): boolean {

    if (isNullOrUndefined(product.phanTramGiamGia)) return false;

    return true;
  }

}
