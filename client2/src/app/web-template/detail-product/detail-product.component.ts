import {ProductService} from "../../service/product/product.service";
import {DetailProductLogic} from "./detail-product-logic";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../../bean/product";
import {ProductViewService} from "../../service/product/product-view.service";
import {CategoryService} from "../../service/category/category.service";
import {ProductView} from "../../bean/product-view";
import {CategoryItem} from "../../bean/category-item";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {GioHangService} from "../../service/order/gio-hang.service";
import {ApplicationUtils} from "../../common/application-utils";
import {NumberFormatter} from "../../service/formator/number-formatter";

declare var $: any;

declare var $j: any;

declare var productCarousel: any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent
  extends DetailProductLogic implements OnInit, AfterViewChecked {

  private initProductCarouselEffectFn: () => void;

  ngAfterViewChecked(): void {

    if (!isNullOrUndefined(this.initProductCarouselEffectFn))
      this.initProductCarouselEffectFn();

    this.initProductCarouselEffectFn = null;
  }

  productId: any;

  detailForms: OrderDetailForm;

  giaTruocKhiHa: number;

  private numberFormater: NumberFormatter;

  private activeImageIndex: number;

  constructor(private router: Router, protected productService: ProductService, protected productViewService: ProductViewService,
              protected route: ActivatedRoute, protected categoryService: CategoryService,
              protected gioHangService: GioHangService,
              protected applicationContext: ApplicationUtils) {

    super(productService, productViewService, categoryService);
  }

  ngOnInit() {

    this.getListCategory();

    this.numberFormater = this.applicationContext.defaultNumberFormatter;

    this.allowDisplayProductVetical = true;
  }


  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    this.productId = this.route.snapshot.paramMap.get("productId");

    this.getProductById(this.productId);
  }

  isAvailbaleProduct(): boolean {

    if (isNullOrUndefined(this.product)) return false;

    return true;
  }

  listHinhAnhSanPham(product: Product): string[] {
    let imageList: string[] = [];
    if (!isNullOrUndefined(product.image1)) imageList[0] = product.image1;
    if (!isNullOrUndefined(product.image2)) imageList[1] = product.image2;
    if (!isNullOrUndefined(product.image3)) imageList[2] = product.image3;
    if (!isNullOrUndefined(product.image4)) imageList[3] = product.image4;
    return imageList;
  }

  getListImageHighlight(hinhAnhTrucQuan: string): string[] {

    if (isNullOrUndefined(hinhAnhTrucQuan)) return null;

    let dateElements: string[] = hinhAnhTrucQuan.split(",");

    return dateElements;
  }

  activeImage(imageIndex: number): boolean {

    return imageIndex == this.activeImageIndex;
  }


  protected afterGetListProduct(product: Product): void {

    super.afterGetListProduct(product);

    this.activeImageIndex = 0;

    this.getListProduct(product.categoryId);

    this.initProductCarouselEffectFn = (() => {

      productCarousel($j('#megaMenuCarousel1'), 1, 1, 1, 1, 1, 'productCarousel');
    });
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

    // this.router.navigate(["/chiTietSanPham", productView.id]);

    let id: string = productView.id;
    let link: any[] = ['/chiTietSanPham', id];
    this.router.navigate(link);
  }


  kiemTraGiamGia(product: ProductView): boolean {

    if (isNullOrUndefined(product.phanTramGiamGia)) return false;

    return true;
  }

  getGiaKhuyenMai(product: ProductView): number {
    if (isNullOrUndefined(product.gia)) {
      return 0;
    } else {

      this.giaTruocKhiHa = isNullOrUndefined(product.giaTruocKhiHa) ? 0 : Number.parseInt(product.giaTruocKhiHa);


      return (this.giaTruocKhiHa - product.gia );
    }
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

}
