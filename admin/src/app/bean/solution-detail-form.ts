import {Validateable} from "../common/validate/validateable";
import {Errors} from "../common/validate/errors";

export class SolutionDetailForm implements Validateable {

  errors: Errors;

  id: string;
  tieuDe: string;
  hinhAnh: string;
  noiDungNgan: String;
  noiDungChiTiet: string;

  static constraints = {

    tieuDe: {nullable: false},
    hinhAnh: {nullable: true},
    noiDungNgan: {nullable: false},
    noiDungChiTiet: {nullable: false}
  }
}
