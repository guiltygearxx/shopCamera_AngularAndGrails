import {SelectOption} from "./select-option";

export interface SelectOptionsConverterInterface {

  convertToSelectOptions(data: any): SelectOption[];
}
