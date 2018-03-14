import {Validateable} from "../common/validate/validateable";
import {Errors} from "../common/validate/errors";

export class UploadFileForm implements Validateable {

  errors: Errors;

  file: File;

  static constraints = {

    file: {nullable: false},
  }
}
