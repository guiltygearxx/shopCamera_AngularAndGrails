import {ProductService} from "../../service/product/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {AfterViewChecked, Component, OnInit} from "@angular/core";
import {Product} from "../../bean/product";
import {ProductViewService} from "../../service/product/product-view.service";
import {CategoryService} from "../../service/category/category.service";
import {ProductView} from "../../bean/product-view";
import {CategoryItem} from "../../bean/category-item";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {GioHangService} from "../../service/order/gio-hang.service";
import {NumberFormatter} from "../../common/formater/number-formatter";
import {ApplicationUtils} from "../../common/application-utils";

declare var $: any;

declare var $j: any;

declare var productCarousel: any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit, AfterViewChecked {

  allowDisplayProductVetical: boolean;

  product: Product;

  productLienQuan: ProductView[];

  categoryList: CategoryItem[];

  private initProductCarouselEffectFn: () => void;

  productId: any;

  private activeImageIndex: number;

  productCount: number = 1;

  constructor(private router: Router,
              protected productService: ProductService,
              protected productViewService: ProductViewService,
              protected route: ActivatedRoute,
              protected categoryService: CategoryService,
              protected gioHangService: GioHangService,
              protected  numberFormater: NumberFormatter,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit() {

    this.getListCategory();

    this.allowDisplayProductVetical = true;
  }

  ngAfterViewChecked(): void {

    if (!isNullOrUndefined(this.initProductCarouselEffectFn))
      this.initProductCarouselEffectFn();

    this.initProductCarouselEffectFn = null;
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;

    this.productId = this.route.snapshot.paramMap.get("productId");

    this.getProductById(this.productId);
  }

  isAvailbaleProduct(): boolean {

    if (isNullOrUndefined(this.product)) return false;

    return true;
  }

  listHinhAnhSanPham(product: Product): string[] {

    if (isNullOrUndefined(product)) return [];

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

  addProductToOrder(event: any): void {

    event.preventDefault();

    let detailForms: OrderDetailForm = this.converterProduct(this.product);

    return this.gioHangService.addOrderDetail(detailForms);
  }

  addProductViewToOrder(event: any, product: ProductView): void {

    event.preventDefault();

    let detailForms: OrderDetailForm = this.converterProductView(product);

    return this.gioHangService.addOrderDetail(detailForms);
  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    // this.router.navigate(["/chiTietSanPham", productView.id]);

    let id: string = productView.id;

    let link: any[] = ['/chiTietSanPham', id];

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(link);
    });
  }

  kiemTraGiamGia(product: ProductView): boolean {

    if (isNullOrUndefined(product.phanTramGiamGia)) return false;

    return true;
  }

  getGiaKhuyenMai(product: ProductView): number {

    return isNullOrUndefined(product.gia) ? 0 : ((product.giaTruocKhiHa || 0) - product.gia);
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

  getProductById(productId: string) {

    this.productService
      .getById(productId)
      .subscribe((product) => this.afterGetListProduct(product));

  }

  getListProduct(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);


    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 8};

    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProductView(productView));

  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  addProduct(amount: number): void {

    this.productCount = (this.productCount + amount + 1000) % 1000;
  }

  productCountChanged(event: any): void {

    let val = $(event.target).val();

    if (isNaN(val)) {

      this.productCount = 1;
      return;
    }

    let intVal = parseInt(val);

    this.productCount = (intVal + 1000) % 1000;
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  protected afterGetListProductView(productViews: ProductView[]): void {
    this.productLienQuan = productViews;
  }

  protected afterGetListProduct(product: Product): void {

    this.product = product;

    this.activeImageIndex = 0;

    this.getListProduct(product.categoryId);

    this.initProductCarouselEffectFn = (() => {

      productCarousel($j('#megaMenuCarousel1'), 1, 1, 1, 1, 1, 'productCarousel');
    });
  }

  private converterProduct(product: Product): OrderDetailForm {

    let orderDetail = new OrderDetailForm();

    orderDetail.productId = product.id;
    orderDetail.name = product.name;
    orderDetail.hinhAnh = product.image1
    orderDetail.gia = product.gia.toString();
    orderDetail.quantity = this.productCount.toString();

    return orderDetail;

  }

  private converterProductView(product: ProductView): OrderDetailForm {

    let orderDetail = new OrderDetailForm();

    orderDetail.productId = product.id;
    orderDetail.name = product.name;
    orderDetail.hinhAnh = product.image1
    orderDetail.gia = product.gia.toString();
    // orderDetail.quantity = this.productCount.toString();

    return orderDetail;

  }
}
