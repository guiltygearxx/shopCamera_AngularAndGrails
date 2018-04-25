import {Validateable} from "../common/validate/validateable";
import {Errors} from "../common/validate/errors";

export class OrderForm implements Validateable {

  errors: Errors;

  tenNguoiMua: string;
  sdt: string;
  email: string;
  diaChi: string;
  moTa: string;

  static constraints = {

    tenNguoiMua: {blank: false, maxSize: 500},
    sdt: {nullable: false, maxSize: 255},
    email: {nullable: false, maxSize: 255},
    diaChi: {nullable: false, maxSize: 1000},
    moTa: {maxSize: 1000},
  }
}
