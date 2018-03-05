import {ProductService} from "../../service/product/product.service";
import {Product} from "../../bean/product";

export class DetailProductLogic{

  constructor(protected productService: ProductService) {
  }

  product: Product;

  getProductById(productId: string) {

    let params = {id: productId};

    this.productService
      .getById(params)
      .subscribe((product) => this.afterGetListProduct(product));

  }
  afterGetListProduct(product: Product): void {
    this.product = product;
  }

}
