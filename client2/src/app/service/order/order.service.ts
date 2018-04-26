import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Order} from "../../bean/order";
import {HttpService} from "../../common/http.service";
import {CreateOrderForm} from "../../bean/create-order-form";
import {Observable} from "rxjs/Observable";
import {ResultBean} from "../../common/result-bean";

@Injectable()
export class OrderService extends RestService<Order> {

  resource: string = "order";

  constructor(protected http: HttpService) {

    super(http);
  }

  createOrder(form: CreateOrderForm): Observable<ResultBean> {

    return this.httpService.post(this.resource + "/createOrder", form, null);
  }
}
