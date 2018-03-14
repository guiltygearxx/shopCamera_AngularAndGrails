import {ProductView} from "../../bean/product-view";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {ProductViewService} from "../../service/product/product-view.service";
import {isNullOrUndefined} from "util";

export class ListProductLogic {

  constructor(protected productViewService: ProductViewService, protected categoryService: CategoryService) {
  }

  categoryName: string;

  categoryList: CategoryItem[];

  productList: ProductView[];

  getListProduct(categoryId: string) {

    let subCategoryIds = this.categoryList
      .filter((category) => category.parentCategoryId == categoryId)
      .map((category) => category.id);


    let categoryIds = [categoryId];

    if (!isNullOrUndefined(subCategoryIds))
      categoryIds = categoryIds.concat(subCategoryIds)

    let params = {categoryIds: categoryIds.join(";"), max: 100};


    this.productViewService
      .get(params)
      .subscribe((productView) => this.afterGetListProduct(productView));

  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }


  afterGetListProduct(productViews: ProductView[]): void {

    this.productList = productViews;
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {
    this.categoryList = categoryItems;
  }

}
