import {Errors} from "./errors";
import {Error} from "../error";
import {FieldError} from "./field-error";
import {isNullOrUndefined} from "util";

export class DefaultErrors implements Errors {

  errors: Error[] = [];

  rejectValue(field: string, value: any, errorCode: string, args: any[]): void {

    let error = new FieldError();

    error.field = field;
    error.errorCode = errorCode;
    error.params = [value];

    if (!isNullOrUndefined(args) && args.length) error.params = error.params.concat(args);

    this.addError(error);
  }

  private addError(error: Error): void {

    this.errors.push(error);
  }
}
