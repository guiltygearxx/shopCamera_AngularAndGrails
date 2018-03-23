import {Injectable} from '@angular/core';
import {RestService} from '../common/rest-service';
import {OrderDetail} from '../bean/order-detail';
import {HttpService} from '../common/http.service';

@Injectable()
export class OrderDetailService extends RestService<OrderDetail> {

  resource: string = 'orderDetail';

  constructor(protected httpService: HttpService) {
    super(httpService);
  }
}
