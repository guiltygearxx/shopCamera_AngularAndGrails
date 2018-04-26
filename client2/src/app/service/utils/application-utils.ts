
import {isNullOrUndefined, isString} from "util";
import BigNumber from "bignumber.js";
import {DATE_FORMAT} from "./applicationConstant";
import * as moment from "moment";
import {SimpleChanges} from "@angular/core";
import {i18n} from "../../common/i18n";

var Big: any;

declare var $: any;

export function toBig(value: any): any {

  return (isNullOrUndefined(value) || (isString(value) && !value.trim())) ? null : new Big(value);
}

export function isStringEmpty(s: string): boolean {

  return (isNullOrUndefined(s) || !s) ? true : false;
}

export function convertStringToDate(dateStr: string): Date {

  if (isNullOrUndefined(dateStr)) return null;

  return moment(dateStr, DATE_FORMAT).toDate();
}

export function convertTimeToDate(time: number): Date {

  if (isNullOrUndefined(time)) return null;

  return moment(time).toDate();
}

export function formatDate(date: Date) {

  if (isNullOrUndefined(date)) return null;

  return moment(date).format(DATE_FORMAT);
}

export function convertStringToBigNumber(value: string): BigNumber {

  if (isStringEmpty(value)) return null;

  //normalize value;
  value = value.replace(/\./g, "").replace(",", ".");

  let number_: BigNumber = new BigNumber(value);

  return number_;
}

export function formatBigNumber(value: BigNumber, decimalLength: number): string {

  if (isNullOrUndefined(value)) return "";

  return value.toFormat(decimalLength);
}

export function formatNumber(value: string, decimalLength: number): string {

  if (isStringEmpty(value)) return "";

  return formatBigNumber(convertStringToBigNumber(value), decimalLength);
}

export function formatNumber2(value: number, decimalLength: number): string {

  if (isNullOrUndefined(value)) return "";

  let value_ = value.toString().replace(/\./, ",");

  return formatNumber(value_, decimalLength);
}

export function isNumberFormat(value: string): boolean {

  if (isNullOrUndefined(value)) return false;

  let value_: string = value.toString().trim();

  value_ = value_.replace(/\./g, "");

  if (isStringEmpty(value_)) return false;

  return /^\d+(,\d+)?$/.test(value_);
}

export function isDateFormat(value: string): boolean {

  if (isStringEmpty(value)) return false;

  let value_: string = value.toString().trim();

  return /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value_);
}

/**
 * append a2 to a1;
 *
 * @param {any[]} a1
 * @param a2
 */
export function appendArrayTo(a1: any[], a2: any) {

  if (isNullOrUndefined(a2)) return;

  for (let item of a2) {

    a1.push(item);
  }
}

/**
 *
 * @param target
 * @param element
 * @returns {boolean} true = element contains target || target == element;
 */
export function isContains(target, element): boolean {

  return $(element).has(target).length > 0 || $(element).is(target);
}

export function randomNumber(): number {

  return Math.random();
}

export function isPropertyChanges(changes: SimpleChanges, property: string) {

  return !isNullOrUndefined(changes[property]);
}

export function message(code: string, params: any[]) {

  let message = i18n[code];

  if (isStringEmpty(message)) {

    message = code;
  } else {

    if (!isNullOrUndefined(params) && params.length > 0) {

      let paramIndex: number = 0;

      for (let param of params) {

        if (isNullOrUndefined(param)) param = "";

        message = message.split("{" + paramIndex + "}").join(param);

        paramIndex++;
      }
    }
  }

  return message;
}

export function compareDate(date1: Date, date2: Date): number {

  let time1 = date1.getTime();
  let time2 = date2.getTime();

  return time1 == time2 ? 0 : (time1 > time2 ? 1 : -1);
}

export function compareNumber(number1: number, number2: number): number {

  return number1 == number2 ? 0 : (number1 > number2 ? 1 : -1);
}

export function compareBigNumber(number1: BigNumber, number2: BigNumber): number {

  return number1.comparedTo(number2);
}

export function compareString(number1: string, number2: string): number {

  if (isNullOrUndefined(number1)) {

    number1 = "";
  }

  if (isNullOrUndefined(number2)) {

    number2 = "";
  }

  return number1.localeCompare(number2);
}

export function clearTime(date: Date): Date {

  return moment(date).startOf("day").toDate();
}

export function copyObject(source: any, des: any): any {

  if (isNullOrUndefined(source) || isNullOrUndefined(des)) {

    return;
  }

  Object.keys(source).forEach((prop) => des[prop] = source[prop]);

  return des;
}

export function roundUp(value: number, decimalLength: number): number {

  if (isNullOrUndefined(value)) return null;

  let number_: BigNumber = new BigNumber(value.toString());

  return number_.round(decimalLength, BigNumber.ROUND_UP).toNumber();
}

export function getYear(date: Date): number {

  if (isNullOrUndefined(date)) return null;

  return date.getFullYear();
}

export function sum<T>(items: T[], getValueClosure: ((T) => number), defaultValue: number): number {

  if (isNullOrUndefined(items) || !items.length) return defaultValue;

  let total = 0;

  items.forEach((item) => total += getValueClosure(item));

  return total;
}
