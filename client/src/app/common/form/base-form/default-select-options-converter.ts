import {SelectOptionsConverterInterface} from "./select-options-converter.interface";
import {SelectOption} from "./select-option";
import {isNullOrUndefined} from "util";

export class DefaultSelectOptionsConverter implements SelectOptionsConverterInterface {

  private idField: string;
  private nameField: string;

  constructor(idField: string, nameField: string) {

    this.idField = idField;
    this.nameField = nameField;
  }

  convertToSelectOptions(data: any): SelectOption[] {

    let selectOptions: SelectOption[] = [];

    if (isNullOrUndefined(data)) return selectOptions;

    for (let item of (data as any[])) {

      selectOptions.push({id: item[this.idField], name: item[this.nameField]} as SelectOption);
    }

    return selectOptions;}

}
