import {GioHangService} from "../../service/order/gio-hang.service";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {FormFlowManager} from "../../common/form-flow-manager";
import {ApplicationUtils} from "../../common/application-utils";
import {OrderForm} from "../../bean/order-form";
import {OrderDetailService} from "../../service/order/order-detail.service";
import {OrderService} from "../../service/order/order.service";
import {Order} from "../../bean/order";
import {OrderDetail} from "../../bean/order-detail";
import BigNumber from "bignumber.js";
import {isNullOrUndefined} from "util";

export class CheckOutLogic {
  constructor(protected gioHangService: GioHangService,
              protected orderService: OrderService,
              protected orderDetailService: OrderDetailService,
              protected validateUtils: ValidateUtils,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
  }

  errorMessages: string[];

  orderForm: OrderForm;

  orderSuccess: Order;

  getSoLuongTrongGioHang(): number {

    return this.gioHangService.getOrderDetail();
  }

  checkSuccessOrder(): boolean {
    if (isNullOrUndefined(this.orderSuccess.code)) return false;
    return true;
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

    this.orderService.post(this.convertToDomain()).subscribe((order) => {

      this.sauKhiXacNhanDonHang(order);
    });

  }

  sauKhiXacNhanDonHang(order: Order): void {

    let size = this.gioHangService.detailForms.length;

    if (size < 1) {
      let successMessage = this.applicationUtils.message("xacNhanDonHang.false");

      this.formFlowManager.displaySuccessMessage(successMessage);
    } else {

      this.orderSuccess = order;

      this.orderForm = new OrderForm();

      this.gioHangService.detailForms.forEach((item) => {

        this.orderDetailService.post(this.convertToOrderDetail(order, item)).subscribe((order) => {

          size--;

          if (size == 0) {

            let successMessage = this.applicationUtils.message("xacNhanDonHang.success");

            this.formFlowManager.displaySuccessMessage(successMessage);
          }
        });
      });
    }
  }

  private convertToDomain(): Order {

    let order = new Order();

    order.tenNguoiMua = this.orderForm.tenNguoiMua;
    order.email = this.orderForm.email;
    order.sdt = this.orderForm.sdt;
    order.diaChi = this.orderForm.diaChi;
    order.moTa = this.orderForm.moTa;

    return order;
  }

  private convertToOrderDetail(order: Order, detailForm: OrderDetailForm): OrderDetail {

    let orderDetail = new OrderDetail();

    orderDetail.productId = detailForm.productId;
    orderDetail.orderId = order.code;
    orderDetail.quantity = this.applicationUtils.convertStringToBigNumber(detailForm.quantity).toNumber();
    orderDetail.gia = this.applicationUtils.convertStringToBigNumber(detailForm.gia).toNumber();


    return orderDetail;
  }

  private validateForm(): boolean {

    let validateResult = this.validateUtils.validate(this.orderForm, OrderForm.constraints);

    if (!validateResult) {

      this.errorMessages.push(this.applicationUtils.message("default.form.error"));
    }

    return validateResult;
  }
}
