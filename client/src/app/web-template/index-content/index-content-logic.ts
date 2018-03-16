import {ProductView} from "../../bean/product-view";
import {ProductViewService} from "../../service/product/product-view.service";
import {isNullOrUndefined} from "util";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";

export class IndexContentLogic{

  productListCameraGiamSat: ProductView[];

  productListGiaiPhapCamera: ProductView[];

  danhSachTinTuc: News[];

  categoryList: CategoryItem[];

  constructor(protected productViewService: ProductViewService, protected categoryService: CategoryService, protected newsService:NewsService) {
  }


  getListProductCameraGiamSat(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);

    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 20};

    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProductCameraGiamSat(productView));

  }

  getListProductGiaiPhapCamera(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);

    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 20};

    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProductGiaiPhapCamera(productView));

  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  getListNews(){
    let getMaxItem: string = '8';

    let params = {max: getMaxItem};


    this.newsService
      .get(params)
      .subscribe((news) => this.afterGetListNews(news));
  }

  protected afterGetListNews(newsItems: News[]): void {
    this.danhSachTinTuc = newsItems;
  }

  protected afterGetListProductCameraGiamSat(productViews: ProductView[]): void {

    this.productListCameraGiamSat = productViews;
  }

  protected afterGetListProductGiaiPhapCamera(productViews: ProductView[]): void {

    this.productListGiaiPhapCamera = productViews;
  }

  protected afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;
  }




}
