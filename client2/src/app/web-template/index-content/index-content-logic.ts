import {ProductView} from "../../bean/product-view";
import {ProductViewService} from "../../service/product/product-view.service";
import {isNullOrUndefined} from "util";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";

export class IndexContentLogic {

  activeImageIndex: number;

  allowDisplayNews: boolean
  allowDisplayProductVetical: boolean;

  productListSanPhamMoi: ProductView[];

  productListKhuyenMai: ProductView[];

  danhSachTinTuc: News[];

  categoryList: CategoryItem[];

  constructor(protected productViewService: ProductViewService, protected categoryService: CategoryService, protected newsService: NewsService) {
  }


  getListProductSanPhamMoi(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);

    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 12,sort: 'lastModifiedTime', order: 'desc'};

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
    let imageList: string[] = [
      "https://www.a1securitycameras.com/images/promo/30/A1-Slider-free-shipping.jpg",
      "https://www.a1securitycameras.com/images/promo/29/A1-Slider-Outdoor.jpg",
      "https://www.a1securitycameras.com/images/promo/30/A1-Slider-Retailer.jpg",
      "https://www.a1securitycameras.com/images/promo/29/A1-Slider-Ip.jpg"
    ];
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

  protected afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;
  }


}
