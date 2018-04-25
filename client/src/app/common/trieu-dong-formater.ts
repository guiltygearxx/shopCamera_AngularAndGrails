import {isNullOrUndefined} from "util";
import {NumberFormatter} from "./formater/number-formatter";
import {Injectable} from "@angular/core";

@Injectable()
export class TrieuDongFormater extends NumberFormatter {

  format(value: any): string {

    if (!isNullOrUndefined(value)) {

      value = value / 1000000;
    }

    return super.format(value);
  }
}
