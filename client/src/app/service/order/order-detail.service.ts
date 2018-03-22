import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Order} from "../../bean/order";
import {HttpService} from "../../common/http.service";
import {ProductView} from "../../bean/product-view";
import {OrderDetail} from "../../bean/order-detail";

@Injectable()
export class OrderDetailService extends RestService<OrderDetail>{
  resource: string = "orderDetail";

  constructor(protected http: HttpService) {

    super(http);

  }
}
