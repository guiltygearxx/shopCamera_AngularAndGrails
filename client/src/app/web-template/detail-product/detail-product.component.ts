import {ProductService} from "../../service/product/product.service";
import {DetailProductLogic} from "./detail-product-logic";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Component, OnDestroy, OnInit} from "@angular/core";
import {Product} from "../../bean/product";
import {ProductViewService} from "../../service/product/product-view.service";
import {CategoryService} from "../../service/category/category.service";
import {ProductView} from "../../bean/product-view";
import {CategoryItem} from "../../bean/category-item";

declare var $: any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent
  extends DetailProductLogic implements OnInit {

  productId: any;

  private activeImageIndex: number;

  constructor(private router: Router, protected productService: ProductService, protected productViewService: ProductViewService,
              protected route: ActivatedRoute, protected categoryService: CategoryService) {

    super(productService, productViewService, categoryService);
  }

  ngOnInit() {

    this.getListCategory();

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

  activeImage(imageIndex: number): boolean {

    return imageIndex == this.activeImageIndex;
  }


  protected afterGetListProduct(product: Product): void {

    super.afterGetListProduct(product);

    this.activeImageIndex = 0;

    this.getListProduct(product.categoryId);
  }


  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    // this.router.navigate(["/chiTietSanPham", productView.id]);

    let id: string = productView.id;
    let link: any[] = ['/chiTietSanPham', id];
    this.router.navigate(link);
  }

}
