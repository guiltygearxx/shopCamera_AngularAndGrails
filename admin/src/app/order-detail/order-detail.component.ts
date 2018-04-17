import {Component} from '@angular/core';
import {DefaultDetailComponent} from '../common/default-detail-component';
import {Order} from '../bean/Order';
import {ActivatedRoute} from '@angular/router';
import {DialogService} from 'ng2-bootstrap-modal';
import {ApplicationUtils} from '../common/application-utils';
import {ValidateUtils} from '../common/validate/validate-utils';
import {FormFlowManager} from '../common/form-flow-manager';
import {OrderService} from '../service/order.service';
import {OrderDetailForm} from '../bean/order-detail-form';
import {OrderDetailService} from '../service/order-detail.service';
import {OrderDetail} from '../bean/order-detail';
import {ComponentUtils} from '../common/component-utils';
import {INPUT_FORMAT_NUMBER} from '../common/application-constants';
import {ProductViewService} from '../service/product-view-service';
import {isNullOrUndefined} from 'util';
import {ProductView} from '../bean/product-view';
import {GroupByWrapper} from '../common/group-by-wrapper';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent extends DefaultDetailComponent<OrderDetailForm, Order> {

  orderDetails: OrderDetail[];

  products: ProductView[];

  productsMapById: GroupByWrapper<ProductView>;

  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: OrderService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService,
              protected orderDetailService: OrderDetailService,
              protected componentUtils: ComponentUtils,
              protected productViewService: ProductViewService) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new OrderDetailForm();

    super.ngOnInit();
  }

  formatNumber(value: any): string {

    return this.componentUtils.formatValue(value, INPUT_FORMAT_NUMBER);
  }

  getProductName(orderDetail: OrderDetail): string {

    if (isNullOrUndefined(this.productsMapById)) return null;

    let product = this.productsMapById.getItem([orderDetail.productId]);

    return isNullOrUndefined(product) ? null : product.name;
  }

  protected getDetailFormConstraints(): any {

    return OrderDetailForm.constraints;
  }

  protected convertToBaseDomain(): Order {
    throw new Error('Method not supported.');
  }

  protected bindDataToForm(object: Order): OrderDetailForm {

    let form = new OrderDetailForm();

    form.id = object.id;
    form.code = object.code;
    form.tenNguoiMua = object.tenNguoiMua;
    form.sdt = object.sdt;
    form.email = object.email;
    form.diaChi = object.diaChi;
    form.moTa = object.moTa;
    form.status = object.status;
    form.id = object.id;

    return form;
  }

  protected initForCreate(): OrderDetailForm {
    throw new Error('Method not supported.');
  }

  protected initForEdit(): void {

    super.initForEdit();

    this.loadOrderDetails();
  }

  protected loadOrderDetails(): void {

    this.orderDetailService.get({orderId: this.id}).subscribe((items) => {

      this.orderDetails = items;

      this.loadProducts();
    });
  }

  protected loadProducts(): void {

    if (isNullOrUndefined(this.orderDetails) || this.orderDetails.length == 0) return;

    let productIds = this.orderDetails.map((item) => item.productId);

    this.productViewService.get({productIds: productIds.join(';')}).subscribe((items) => {

      this.products = items;

      (this.productsMapById = new GroupByWrapper<ProductView>()).groupBy(items, [((item) => item.id)]);
    });
  }
}
