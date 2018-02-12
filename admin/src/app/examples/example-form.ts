import {Errors} from "../common/validate/errors";
import {Validateable} from "../common/validate/validateable";

export class ExampleForm implements Validateable {

  errors: Errors;

  stringField: string;
  numberField: number;
  emailField: string;
  regexField: string;
  listField: string[];
  customField: string;

  static constrains = {

    emailField: {nullable: true, email: true},

    stringField: {
      inList: ["Joe", "Fred", "Bob"],
      matches: "[a-zA-Z]+",
      maxSize: 25,
      minSize: 1,
      size: [1, 25],
      notEqual: "Bob"
    },

    numberField: {max: 1000, min: 0, notEqual: 222, range: [0, 1000], scale: 2},

    listField: {maxSize: 3, minSize: 0, size: [0, 3]},

    customField: {

      validator: ((val: string, obj: any, errors: Errors) => {

        return true;
      })
    }
  }
}
