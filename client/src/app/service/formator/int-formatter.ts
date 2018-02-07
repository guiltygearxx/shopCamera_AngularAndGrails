import {FormatterInterface} from "./formatter.interface";
import {isNullOrUndefined} from "util";
import BigNumber from "bignumber.js";
import {convertStringToBigNumber, formatNumber, isNumberFormat} from "../utils/application-utils";

export class IntFormatter implements FormatterInterface<any> {

  format(value: any): string {

    if (isNullOrUndefined(value)) return "";

    if (!isNumberFormat(value)) return value;

    let number: BigNumber = convertStringToBigNumber(value);

    if (number.decimalPlaces() > 0) return value;

    return formatNumber(value, 0);
  }
}
