
import {FormatterInterface} from "./formatter.interface";

export class DefaultFormatter implements FormatterInterface<any> {

  format(value: any): string {

    return value;
  }
}
