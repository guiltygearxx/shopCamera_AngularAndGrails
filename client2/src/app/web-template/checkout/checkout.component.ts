import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GioHangService} from "../../service/order/gio-hang.service";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {ApplicationUtils} from "../../common/application-utils";
import {OrderForm} from "../../bean/order-form";
import {OrderService} from "../../service/order/order.service";
import {NumberFormatter} from "../../common/formater/number-formatter";
import {ResultBean} from "../../common/result-bean";
import {CreateOrderDetailForm} from "../../bean/create-order-detail-form";
import {CreateOrderForm} from "../../bean/create-order-form";
import {OrderDetailForm} from "../../bean/order-detail-form";
import BigNumber from "bignumber.js";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  errorMessages: string[];

  orderForm: OrderForm;

  constructor(private router: Router,
              protected gioHangService: GioHangService,
              protected orderService: OrderService,
              protected validateUtils: ValidateUtils,
              protected applicationUtils: ApplicationUtils,
              protected numberFormater: NumberFormatter) {

  }

  ngOnInit() {

    this.errorMessages = [];

    this.orderForm = new OrderForm();
  }

  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.orderForm);
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.router.navigate(["/trangChu"]);
  }

  getSoLuongTrongGioHang(): number {

    return this.gioHangService.getOrderDetail();
  }

  removeProduct(event: any, detailForms: OrderDetailForm): void {

    event.preventDefault();

    return this.gioHangService.removeOrderDetail(detailForms);
  }

  thanhTienProduct(item: OrderDetailForm): number {

    let tongTien: BigNumber = new BigNumber(0);

    let giaProduct = this.applicationUtils.convertStringToBigNumber(item.gia);

    let quantity = this.applicationUtils.convertStringToBigNumber((item.quantity));

    tongTien = tongTien.plus(giaProduct.mul(quantity));

    return tongTien.toNumber();
  }

  tongTienThanhToan(): number {

    let tongTien = 0;

    this.gioHangService.detailForms.forEach((item) => {

      tongTien += this.thanhTienProduct(item);
    });

    return tongTien;
  }

  getListGioHang(): OrderDetailForm[] {

    return this.gioHangService.detailForms;
  }

  xacNhanDonHang(): void {

    if (!this.validateForm()) return;

    this.orderService
      .createOrder(this.convertToSubmitForm())
      .subscribe((resultBean) => this.afterXacNhanDonHang(resultBean));
  }

  private afterXacNhanDonHang(resultBean: ResultBean): void {

    let orderCode = resultBean.result.orderCode;

    console.log(this.applicationUtils.message("createOrder.success", [orderCode]));

    alert(this.applicationUtils.message("createOrder.success", [orderCode]));

    this.gioHangService.resetOrder();

    this.router.navigate(["/trangChu"]);
  }

  private convertToSubmitForm(): CreateOrderForm {

    let form = new CreateOrderForm();

    form.tenNguoiMua = this.orderForm.tenNguoiMua;
    form.email = this.orderForm.email;
    form.sdt = this.orderForm.sdt;
    form.diaChi = this.orderForm.diaChi;
    form.moTa = this.orderForm.moTa;

    form.orderDetailForms = this.gioHangService.detailForms.map((item) => {

      let detailForm = new CreateOrderDetailForm();

      detailForm.productId = item.productId;
      detailForm.quantity = parseInt(item.quantity);

      return detailForm;
    });

    return form;
  }

  private validateForm(): boolean {

    let validateResult = this.validateUtils.validate(this.orderForm, OrderForm.constraints);

    if (!validateResult) {

      this.errorMessages.push(this.applicationUtils.message("default.form.error"));
    }

    return validateResult;
  }
}
