import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class SolutionDetailForm implements Validateable {

  errors: Errors;

  id: string;
  tieuDe: string;
  hinhAnh: string;
  noiDungNgan: String;
  noiDungChiTiet: string;

  static constraints = {

    tieuDe: {nullable: false, maxSize: 1000},
    hinhAnh: {nullable: true, maxSize: 1000},
    noiDungNgan: {nullable: false},
    noiDungChiTiet: {nullable: false}
  };
}
