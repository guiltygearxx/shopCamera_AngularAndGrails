import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class CategoryDetailForm implements Validateable {

  errors: Errors;

  name: string;
  parentCategoryId: string;
  code: string;
  imageUrl: string;
  content: string;
  type: string;

  static constraints = {

    name: {blank: false, maxSize: 1000},
    parentCategoryId: {nullable: true},
    code: {nullable: false, maxSize: 255},
    content: {nullable: true},
    imageUrl: {nullable: true, maxSize: 1000},
    type: {nullable: true, maxSize: 255},
  };
}
