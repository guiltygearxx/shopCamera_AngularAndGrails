import {Validateable} from "../../common/validate/validateable";
import {Errors} from "../../common/validate/errors";

export class AddNewHeaderForm implements Validateable{

  errors: Errors;

  nameHeader: string;
  contentHeader: string;
  flag: boolean;

  static constraints = {

    nameHeader: {nullable: false, maxSize: 255},
    contentHeader: {nullable: true, maxSize: 5000},
    flag: {nullable: false},
  };
}
