import {Validateable} from "../../common/validate/validateable";
import {Errors} from "../../common/validate/errors";

export class WebContactForm implements Validateable {

  errors: Errors;

  name: string;
  email: string;
  phone: string;
  address: string;
  comment: string;

  static constraints = {

    name: {blank: false, maxSize: 255},
    email: {nullable: false, email: true},
    phone: {nullable: false},
    address: {nullable: false},
    comment: {nullable: false},
  }
}
