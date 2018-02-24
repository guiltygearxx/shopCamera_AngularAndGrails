import {Errors} from "../common/validate/errors";
import {Validateable} from "../common/validate/validateable";

export class ExampleForm implements Validateable {

  errors: Errors;

  inListField: string;
  nullableField: string;
  emailField: string;
  matchesField: string;
  maxSizeField: string;
  minSizeField: string;
  sizeField: string;
  notEqualField: string;

  static constrains = {

    inListField: {inList: ["Joe", "Fred", "Bob"]},
    nullableField: {nullable: false},
    emailField: {nullable: true, email: true},
    matchesField: {matches: "[a-zA-Z]+"},
    maxSizeField: {maxSize: 10},
    minSizeField: {minSize: 2},
    sizeField: {size: [2, 8]},
    notEqualField: {notEqual: "Bob"},

    // numberField: {max: 1000, min: 0, notEqual: 222, range: [0, 1000], scale: 2},

    // customField: {
    //
    //   validator: ((val: string, obj: any, fieldErrors: Errors) => {
    //
    //     return true;
    //   })
    // }
  }
}
