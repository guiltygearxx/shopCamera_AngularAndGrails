
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

    tenNguoiMua: {blank: false, maxSize: 255},
    sdt: {nullable: false},
    email: {nullable: false},
    diaChi: {nullable: false},
    moTa: {nullable: false},
  }


}
