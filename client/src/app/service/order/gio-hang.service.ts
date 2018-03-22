import {OrderForm} from "../../bean/order-form";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {Injectable} from "@angular/core";

@Injectable()
export class GioHangService {

  count: number;

  form: OrderForm;

  addOrderDetail(detailForm: OrderDetailForm): void {
    this.form.detailForms.push(detailForm);
  }

  getOrderDetail(): OrderDetailForm[] {
    return this.form.detailForms;
  }

  removeOrderDetail(detailForm: OrderDetailForm): void {
  }

  resetOrder(): void {

  }
}
