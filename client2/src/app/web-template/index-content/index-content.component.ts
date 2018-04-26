import {Component, OnInit} from '@angular/core';
import {ProductViewService} from "../../service/product/product-view.service";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {Router} from "@angular/router";
import {ProductView} from "../../bean/product-view";
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";
import {isNullOrUndefined} from "util";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {GioHangService} from "../../service/order/gio-hang.service";
import {ApplicationUtils} from "../../common/application-utils";
import {NumberFormatter} from "../../common/formater/number-formatter";

const IMAGE_URLS = [
  "https://www.a1securitycameras.com/images/promo/30/A1-Slider-free-shipping.jpg",
  "https://www.a1securitycameras.com/images/promo/29/A1-Slider-Outdoor.jpg",
  "https://www.a1securitycameras.com/images/promo/30/A1-Slider-Retailer.jpg",
  "https://www.a1securitycameras.com/images/promo/29/A1-Slider-Ip.jpg"
];

@Component({
  selector: 'app-index-content',
  templateUrl: './index-content.component.html',
  styleUrls: ['./index-content.component.css']
})
export class IndexContentComponent implements OnInit {

  activeImageIndex: number = 0;

  productListSanPhamMoi: ProductView[];

  productListKhuyenMai: ProductView[];

  danhSachTinTuc: News[];

  categoryList: CategoryItem[];

  constructor(private router: Router,
              protected productViewService: ProductViewService,
              protected categoryService: CategoryService,
              protected newsService: NewsService,
              protected gioHangService: GioHangService,
              protected applicationUtils: ApplicationUtils,
              protected numberFormater: NumberFormatter) {
  }

  ngOnInit() {

    this.getListCategory();

    this.getListNews();
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

  getGiaKhuyenMai(product: ProductView): number {

    return isNullOrUndefined(product.gia) ? 0 : ((product.giaTruocKhiHa || 0) - product.gia);
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;

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

    let detailForms: OrderDetailForm = this.converterProductView(productView);

    return this.gioHangService.addOrderDetail(detailForms);
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

  getListProductSanPhamMoi(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);

    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 12, sort: 'lastModifiedTime', order: 'desc'};

    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProductSanPhamMoi(productView));

  }

  getListProductKhuyenMai(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);

    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 12, sort: 'phanTramGiamGia', order: 'desc'};

    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProductKhuyenMai(productView));

  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};

    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  getListNews() {
    let getMaxItem: string = '8';

    let params = {max: getMaxItem};

    this.newsService
      .get(params)
      .subscribe((news) => this.afterGetListNews(news));
  }

  getListHinhAnhSanPham(): string[] {

    let imageList: string[] = IMAGE_URLS;

    return imageList;
  }

  activeImage(imageIndex: number): boolean {

    return imageIndex == this.activeImageIndex;
  }

  protected afterGetListNews(newsItems: News[]): void {

    this.danhSachTinTuc = newsItems;
  }

  protected afterGetListProductSanPhamMoi(productViews: ProductView[]): void {

    this.productListSanPhamMoi = productViews;
  }

  protected afterGetListProductKhuyenMai(productViews: ProductView[]): void {

    this.productListKhuyenMai = productViews;
  }
}
