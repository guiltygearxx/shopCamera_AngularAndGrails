import {Validateable} from "../common/validate/validateable";
import {Errors} from "../common/validate/errors";

export class LoginForm implements Validateable {

  errors: Errors;

  username: string;
  password: string;

  static constraints = {

    username: {nullable: false},
    password: {nullable: false},
  }
}
