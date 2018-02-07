import {BaseFormInput} from "./base-form-input";
import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Input, OnChanges,
  SimpleChanges
} from "@angular/core";
import {isNullOrUndefined} from "util";
import {isPropertyChanges} from "../../../service/utils/application-utils";
import {SelectOptionsConverterInterface} from "./select-options-converter.interface";
import {SelectOption} from "./select-option";
import {DefaultSelectOptionsConverter} from "./default-select-options-converter";

declare var $: any;

export class BaseSelect extends BaseFormInput
  implements AfterViewInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked {
  @Input()
  customClass: string;

  @Input()
  disabled: boolean = false;

  @Input()
  converter: SelectOptionsConverterInterface;

  @Input()
  data: any[];

  @Input()
  protected selectSettings: { [field: string]: any };

  protected updateSelectPickerFn: () => void;

  protected buildSelectOptionsFn: () => void;

  private disabledFn: () => void;

  private valueChangeBySelect: boolean = false;

  selectOptions: SelectOption[];

  ngOnInit(): void {

    super.ngOnInit();

    if (isNullOrUndefined(this.converter)) {

      this.converter = new DefaultSelectOptionsConverter("id", "name");
    }
  }

  ngAfterContentInit(): void {

    this.buildSelectOptions();

    this.buildSelectSettings();
  }

  ngAfterContentChecked(): void {

    if (!isNullOrUndefined(this.buildSelectOptionsFn)) {

      this.buildSelectOptionsFn();

      this.buildSelectOptionsFn = null;
    }
  }

  ngAfterViewInit(): void {

    $(this.inputElement.nativeElement)
      .select2(this.selectSettings)
      .on("change", (event) => {

        this.value = $(event.target).val();

        this.inputValueChanged();
      });
  }

  ngAfterViewChecked(): void {

    this.valueChangeBySelect = false;

    if (!isNullOrUndefined(this.updateSelectPickerFn)) {

      this.updateSelectPickerFn();

      this.updateSelectPickerFn = null;
    }

    if (!isNullOrUndefined(this.disabledFn)) {

      this.disabledFn();

      this.disabledFn = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!this.valueChangeBySelect && isPropertyChanges(changes, "value")) {

      this.updateSelectPickerFn = () => {

        this.updateSelectPicker();
      };
    }

    if (isPropertyChanges(changes, "data")) {

      this.buildSelectOptionsFn = () => {

        this.buildSelectOptions();
      };

      this.updateSelectPickerFn = () => {

        this.updateSelectPicker();
      };
    }

    if (isPropertyChanges(changes, "disabled")) {

      this.disabledFn = () => {

        this.disableSelect();
      }
    }
  }

  inputValueChanged(): void {

    this.valueChangeBySelect = true;

    super.inputValueChanged();
  }

  protected buildSelectOptions(): void {

    this.selectOptions = this.converter.convertToSelectOptions(this.data);
  }

  private disableSelect(): void {

    $(this.inputElement.nativeElement).prop("disabled", this.disabled);
  }

  protected updateSelectPicker(): void {

    this.buildSelectSettings();

    $(this.inputElement.nativeElement).val(this.value)
      .select2(this.selectSettings);
  }

  protected buildSelectSettings(): void {

    let options: any = this.selectSettings;

    if (!options) this.selectSettings = options = {};

    options.liveSearch = true;
  }
}
