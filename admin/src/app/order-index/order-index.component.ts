import {Component, OnInit} from '@angular/core';
import {BaseIndexComponent} from '../common/base-index-component';
import {OrderIndexFilterForm} from '../bean/order-index-filter-form';
import {OrderService} from '../service/order.service';
import {Order} from '../bean/order';
import {SortableTableFlow} from '../common/sortable-table-flow';
import {ComponentUtils} from '../common/component-utils';
import {DialogService} from 'ng2-bootstrap-modal';
import {ApplicationUtils} from '../common/application-utils';
import {FormFlowManager} from '../common/form-flow-manager';
import {Router} from '@angular/router';
import {SimpleObject} from '../common/simple-object';
import {CONTACT_STATUS_NEW, CONTACT_STATUS_READ, ORDER_STATUS_NEW, ORDER_STATUS_READ} from '../common/application-constants';
import {SupportSubmitForm} from '../common/support-submit-form';
import {ResultBean} from '../common/result-bean';
import {Observable} from 'rxjs/Observable';
import {UpdateOrderForm} from '../bean/update-order-form';

@Component({
  selector: 'app-order-index',
  templateUrl: './order-index.component.html',
  styleUrls: ['./order-index.component.css']
})
export class OrderIndexComponent
  extends BaseIndexComponent<OrderIndexFilterForm, Order, OrderService>
  implements OnInit, SupportSubmitForm<ResultBean> {

  errorMessages: string[];

  resultBean: ResultBean;

  statusList: SimpleObject[];

  selectedOrder: Order;

  constructor(protected domainService: OrderService,
              protected sortableTableFlow: SortableTableFlow,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager,
              protected router: Router,) {

    super(domainService, sortableTableFlow, componentUtils, dialogService, applicationUtils, formFlowManager);
  }

  ngOnInit() {

    this.statusList = [ORDER_STATUS_NEW, ORDER_STATUS_READ].map((status) =>
      new SimpleObject(status, this.getStatusTitle(status))
    );

    this.filterForm = new OrderIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadItems();
  }

  updateOrder(event: any, order: Order): void {

    event.preventDefault();

    this.selectedOrder = order;

    this.formFlowManager.submitForm(this);
  }

  validate(): boolean {
    return true;
  }

  submit(): Observable<ResultBean> {

    let form = new UpdateOrderForm();

    form.status = this.selectedOrder.status == ORDER_STATUS_NEW ? ORDER_STATUS_READ : ORDER_STATUS_NEW;
    form.orderId = this.selectedOrder.id;

    return this.domainService.updateOrder(form);
  }

  afterSubmit(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);

    if (resultBean.isSuccess) {

      this.loadItems();
    }
  }

  protected addNew_(): void {
    throw new Error('Method not supported.');
  }

  protected viewDetail_(item: Order): void {

    this.router.navigate(['/starter/orderDetail/' + item.id]);
  }

  getStatusTitle(status: string): string {

    return this.applicationUtils.message('order.status.' + status);
  }
}
