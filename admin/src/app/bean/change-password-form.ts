import {Validateable} from '../common/validate/validateable';
import {Errors} from '../common/validate/errors';

export class ChangePasswordForm implements Validateable {

  errors: Errors;

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;

  static constraints = {

    oldPassword: {nullable: false, blank: false},
    newPassword: {nullable: false, blank: false, minSize: 8},
    confirmPassword: {nullable: false, blank: false}
  };
}
