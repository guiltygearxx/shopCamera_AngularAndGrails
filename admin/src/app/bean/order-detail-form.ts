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

  static constraints = {}
}
