import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Order} from "../../bean/order";
import {HttpService} from "../../common/http.service";
import {ProductView} from "../../bean/product-view";

@Injectable()
export class OrderService extends RestService<Order>{
  resource: string = "order";

  constructor(protected http: HttpService) {

    super(http);
  }
}
