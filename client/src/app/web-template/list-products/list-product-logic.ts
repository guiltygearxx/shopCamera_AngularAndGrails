import {Product} from "../../bean/product";
import {ProductService} from "../../service/product/product.service";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";

export class ListProductLogic {

  constructor(protected productService: ProductService, protected categoryService: CategoryService) {
  }

  categoryName: string;

  categoryList: CategoryItem[];

  productList: Product[];

  getListProduct(categoryId: string) {

    categoryId = '201110fd-8494-46da-a6a2-044e37c9d095';

    let params = {categoryId: categoryId};

    this.productService
      .get(params)
      .subscribe((product) => this.afterGetListProduct(product));

  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }


  afterGetListProduct(product: Product[]): void {
    this.productList = product;
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {
    this.categoryList = categoryItems;
  }

}
