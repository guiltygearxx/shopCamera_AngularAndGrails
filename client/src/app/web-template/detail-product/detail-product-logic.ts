import {Product} from "../../bean/product";
import {ProductService} from "../../service/product/product.service";
import {ProductViewService} from "../../service/product/product-view.service";
import {ProductView} from "../../bean/product-view";
import {isNullOrUndefined} from "util";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";

export class DetailProductLogic {

  constructor(protected productService: ProductService, protected productViewService: ProductViewService, protected categoryService: CategoryService) {
  }

  product: Product;

  productLienQuan: ProductView[];

  productMoi: ProductView[];

  categoryList: CategoryItem[];

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


  protected afterGetListProduct(product: Product): void {
    this.product = product;
  }

  protected afterGetListProductView(productViews: ProductView[]): void {
    this.productLienQuan = productViews;
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {
    this.categoryList = categoryItems;
  }

}
