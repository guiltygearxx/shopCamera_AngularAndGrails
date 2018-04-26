import {isNullOrUndefined} from "util";
import {NumberFormatter} from "./formater/number-formatter";

export class TrieuDongFormater extends NumberFormatter {

  format(value: any): string {

    if (!isNullOrUndefined(value)) {

      value = value / 1000000;
    }

    return super.format(value);
  }
}
