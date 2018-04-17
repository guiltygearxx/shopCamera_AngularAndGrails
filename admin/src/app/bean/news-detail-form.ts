import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class NewsDetailForm implements Validateable {

  errors: Errors;

  tieuDe: string;
  hinhAnh: string;
  noiDungNgan: string;
  noiDungChiTiet: string;

  static constraints = {

    tieuDe: {nullable: false, maxSize: 1000},
    hinhAnh: {nullable: true, maxSize: 1000},
    noiDungNgan: {nullable: false},
    noiDungChiTiet: {nullable: false},
  };
}
