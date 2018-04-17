import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class OrderDetailForm implements Validateable {

  errors: Errors;

  id: string;

  code: string;
  tenNguoiMua: string;
  sdt: string;
  email: string;
  diaChi: string;
  moTa: string;
  status: string; //da xem;

  static constraints = {

    code: {maxSize: 255},
    tenNguoiMua: {nullable: true, maxSize: 500},
    sdt: {maxSize: 255},
    email: {maxSize: 255},
    diaChi: {nullable: false, maxSize: 1000},
    moTa: {nullable: true, maxSize: 1000},
  };
}
