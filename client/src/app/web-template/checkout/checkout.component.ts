import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GioHangService} from "../../service/order/gio-hang.service";
import {CheckOutLogic} from "./check-out-logic";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {FormFlowManager} from "../../common/form-flow-manager";
import {ApplicationUtils} from "../../common/application-utils";
import {OrderForm} from "../../bean/order-form";
import {OrderService} from "../../service/order/order.service";
import {OrderDetailService} from "../../service/order/order-detail.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent extends CheckOutLogic implements OnInit {

  constructor(private router: Router,
              protected gioHangService: GioHangService,
              protected orderService: OrderService,
              protected orderDetailService: OrderDetailService,
              protected validateUtils: ValidateUtils,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
    super(gioHangService, orderService, orderDetailService, validateUtils, formFlowManager, applicationUtils);
  }

  ngOnInit() {

    this.errorMessages = [];

    this.orderForm = new OrderForm();
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.orderForm);
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.router.navigate(["/trangChu"]);
  }

}
