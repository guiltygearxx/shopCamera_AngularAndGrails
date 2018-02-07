import {BaseFormInput} from "./base-form-input";
import {AfterContentChecked, Input, OnChanges, SimpleChanges} from "@angular/core";
import {isNullOrUndefined} from "util";
import {isPropertyChanges} from "../../../service/utils/application-utils";
import {FormatterInterface} from "../../../service/formator/formatter.interface";

export class BaseInputText extends BaseFormInput
  implements OnChanges, AfterContentChecked {
  @Input()
  placeHolder: string;

  @Input()
  disabled: boolean = false;

  @Input()
  formatter: FormatterInterface<string>;

  displayValue: any;

  isFocusing: boolean = false;

  private initDisplayValueFn: (() => void);

  ngAfterContentChecked(): void {

    if (!isNullOrUndefined(this.initDisplayValueFn)) {

      this.initDisplayValueFn();

      this.initDisplayValueFn = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (isPropertyChanges(changes, "value")) {

      this.initDisplayValueFn = (() => this.initDisplayValue());
    }

    if (isPropertyChanges(changes, "formatter")) {

      this.initDisplayValueFn = (() => this.initDisplayValue());
    }
  }

  inputValueChanged(): void {

    this.value = this.displayValue;

    super.inputValueChanged();
  }

  protected initDisplayValue(): void {

    if (!this.isFocusing) {

      this.displayValue = isNullOrUndefined(this.formatter) ? this.value : this.formatter.format(this.value);
    } else {

      this.displayValue = this.value;
    }
  }

  onFocus(event): void {

    this.isFocusing = true;

    this.initDisplayValue();
  }

  onBlur(event): void {

    this.isFocusing = false;

    this.initDisplayValue();
  }
}
