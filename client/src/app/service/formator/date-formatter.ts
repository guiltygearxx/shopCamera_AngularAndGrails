import {FormatterInterface} from "./formatter.interface";
import {isNullOrUndefined} from "util";
import {convertStringToDate, formatDate, isDateFormat} from "../utils/application-utils";

export class DateFormatter implements FormatterInterface<any> {

  private normalize(value: string): string {

    let dateElements: string[] = value.split("/");

    for (let index = 0; index < 3; index++) {

      if (dateElements[index].length == 1) dateElements[index] = "0" + dateElements[index];
    }

    return dateElements.join("/");
  }

  format(value: any): string {

    if (isNullOrUndefined(value)) return "";

    if (!isDateFormat(value)) return value;

    return formatDate(convertStringToDate(this.normalize(value)));
  }
}
