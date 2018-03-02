import {Product} from "../../bean/product";
import {ProductService} from "../../service/product/product.service";

export class ListProductLogic {

  constructor(protected productService: ProductService) {
  }

  productList: Product[];

  getListProduct(categoryCode: string) {

    let categoryId: string = '28ff3667-89e1-4dec-a631-4568b456e7f3';

    this.productService.get().subscribe((product) => this.afterGetListProduct(product));

  }

  afterGetListProduct(product: Product[]): void {
    this.productList = product;
  }

}
