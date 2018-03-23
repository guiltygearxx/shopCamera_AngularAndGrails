import {OrderForm} from "../../bean/order-form";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {Injectable} from "@angular/core";
import {isNullOrUndefined} from "util";

@Injectable()
export class GioHangService {

  count: number;

  detailForms: OrderDetailForm[];


  constructor() {

    this.detailForms = [];
  }

  addOrderDetail(detailForm: OrderDetailForm): void {

    this.count++;

    let detailForm_ = this.detailForms.find((item) => item.productId == detailForm.productId);

    if (isNullOrUndefined(detailForm_)) {

      detailForm.quantity = 1;

      this.detailForms.push(detailForm);

    } else {

      detailForm_.quantity += 1;
    }
  }

  getOrderDetail(): number {

    let quantityProduct: number = 0;

    this.detailForms.forEach((item) => quantityProduct += item.quantity);

    return quantityProduct;
  }

  removeOrderDetail(detailForm: OrderDetailForm): void {


  }

  resetOrder(): void {

  }
}
