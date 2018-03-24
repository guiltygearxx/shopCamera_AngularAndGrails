import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class CategoryDetailForm implements Validateable {

  errors: Errors;

  name: string;
  parentCategoryId: string;
  code: string;

  static constraints = {

    name: {blank: false, maxSize: 255},
    code: {blank: false},
    parentCategoryId: {nullable: true}
  };
}
