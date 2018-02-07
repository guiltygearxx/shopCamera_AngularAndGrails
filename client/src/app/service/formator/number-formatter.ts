import {FormatterInterface} from "./formatter.interface";
import {isNullOrUndefined, isNumber, isString} from "util";
import {formatNumber, formatNumber2, isNumberFormat} from "../utils/application-utils";
import {DECIMAL_LENGTH} from "../utils/applicationConstant";

export class NumberFormatter implements FormatterInterface<any> {

  format(value: any): string {

    if (isNullOrUndefined(value)) return "";

    if (isString(value)) {

      if (!isNumberFormat(value)) return value;

      return formatNumber(value, DECIMAL_LENGTH);

    } else if (isNumber(value)) {

      return formatNumber2(value, DECIMAL_LENGTH);
    }
  }
}
