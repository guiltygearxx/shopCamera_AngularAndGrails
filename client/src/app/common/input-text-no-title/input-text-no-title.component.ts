import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BaseInputModal} from "../base-input-modal";
import {SupportFormatInputModal} from "../support-format-input-modal";
import {SupportValidateInputModal} from "../support-validate-input-modal";
import {AdminLteInputModal} from "../admin-lte-input-modal";
import {ComponentUtils} from '../component-utils';
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from "../on-change-call-back";
import {ApplicationUtils} from "../application-utils";

type FormatType = ('date' | 'number');

@Component({
  selector: 'app-input-text-no-title',
  templateUrl: './input-text-no-title.component.html',
  styleUrls: ['./input-text-no-title.component.css']
})
export class InputTextNoTitleComponent
  implements OnInit, BaseInputModal, SupportFormatInputModal, SupportValidateInputModal,
    AdminLteInputModal, SupportOnChangesComponentModal, OnChanges, AfterContentChecked {

  viewChangedAttrs: string[];

  afterViewCheckCallbacks: OnChangeCallBack[];

  afterContentCheckCallbacks: OnChangeCallBack[];

  contentChangedAttrs: string[];

  inputId: string;

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  placeHolder: string;

  @Input()
  errorMessage: string;

  isError: boolean;

  displayValue: string;

  @Input()
  isRequired: boolean;

  @Input()
  disabled: boolean;

  @Input()
  value: any;

  @Input()
  autoTrim: boolean = true;

  @Input()
  formatType: FormatType;

  constructor(protected componentUtils: ComponentUtils,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit(): void {

    this.componentUtils.generateInputId(this);

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["value"], (() => this.displayValue = this.formatValue(this.value))),

      new OnChangeCallBack(["errorMessage"], (() => this.isError = !this.applicationUtils.isStringEmpty(this.errorMessage))),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  formatValue(value: any): string {

    return this.componentUtils.formatValue(this.value, this.formatType);
  }

  onFocus(event): void {

    this.displayValue = this.value;
  }

  onBlur(event): void {

    this.displayValue = this.formatValue(this.value);
  }

  inputValueChanged(event: any): void {

    if (this.autoTrim) {

      this.displayValue = this.componentUtils.trim(this.displayValue);
    }

    this.value = this.displayValue;

    this.displayValue = this.formatValue(this.displayValue);

    this.valueChange.emit(this.value);
  }
}
