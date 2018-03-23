import {RestService} from '../common/rest-service';
import {HttpService} from '../common/http.service';
import {Injectable} from '@angular/core';
import {Order} from '../bean/order';
import {UpdateOrderForm} from '../bean/update-order-form';
import {Observable} from 'rxjs/Observable';
import {UpdateContactStatusForm} from '../bean/update-contact-status-form';
import {ResultBean} from '../common/result-bean';

@Injectable()
export class OrderService extends RestService<Order> {

  resource: string = 'order';

  constructor(protected httpService: HttpService) {
    super(httpService);
  }

  updateOrder(form: UpdateOrderForm): Observable<ResultBean> {

    return this.httpService.post(this.resource + '/updateOrder', form, null);
  }
}
