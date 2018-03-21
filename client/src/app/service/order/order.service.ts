import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Order} from "../../bean/order";
import {HttpService} from "../../common/http.service";
import {ProductView} from "../../bean/product-view";

@Injectable()
export class OrderService extends RestService<Order>{
  resource: string = "order";

  productOrder: ProductView[];

  count: number;

  constructor(protected http: HttpService) {

    super(http);

    this.productOrder = [];

    this.count = 1;
  }

  getCount():number{
    return this.count;
  }

  addCount():number{
    return this.count++;
  }

  addProductToOrder(product: ProductView): void{
    this.productOrder.push(product);
  }

}
