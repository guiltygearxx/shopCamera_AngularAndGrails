import {OrderForm} from "../../bean/order-form";
import {OrderDetailForm} from "../../bean/order-detail-form";
import {Injectable} from "@angular/core";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";
import BigNumber from "bignumber.js";

@Injectable()
export class GioHangService {

  count: number;

  detailForms: OrderDetailForm[];

  constructor(protected applicationUtils: ApplicationUtils) {

    this.detailForms = [];
  }

  addOrderDetail(detailForm: OrderDetailForm): void {

    this.count++;

    let orderDetailForm = this.detailForms.find((item) => item.productId == detailForm.productId);

    if (isNullOrUndefined(orderDetailForm)) {

      orderDetailForm = new OrderDetailForm();

      orderDetailForm.productId = detailForm.productId;
      orderDetailForm.quantity = '1';
      orderDetailForm.name = detailForm.name;
      orderDetailForm.hinhAnh = detailForm.hinhAnh;
      orderDetailForm.gia = detailForm.gia;

      this.detailForms.push(orderDetailForm);

    } else {

      orderDetailForm.quantity = (parseInt(orderDetailForm.quantity) + 1).toString();
    }
  }

  getOrderDetail(): number {

    let quantityProduct: BigNumber = new BigNumber(0);

    this.detailForms.forEach((item) => {
      let itemsQuantity = this.applicationUtils.convertStringToBigNumber(item.quantity).toNumber();

      quantityProduct = quantityProduct.plus(itemsQuantity);
    });


    return quantityProduct.toNumber();
  }

  removeOrderDetail(detailForm: OrderDetailForm): void {

    var index = this.detailForms.indexOf(detailForm);

    this.detailForms.splice(index, 1);
  }

  resetOrder(): void {

    this.count = 0;

    this.detailForms = [];
  }
}
