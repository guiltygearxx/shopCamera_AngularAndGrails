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
import {SupportValidateInputModal} from "../support-validate-input-modal";
import {AdminLteInputModal} from "../admin-lte-input-modal";
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from '../on-change-call-back';
import {ComponentUtils} from "../component-utils";
import {ApplicationUtils} from "../application-utils";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent
  implements OnInit, BaseInputModal, SupportValidateInputModal,
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

  @Input()
  isRequired: boolean;

  @Input()
  disabled: boolean;

  @Input()
  value: any;

  @Input()
  autoTrim: boolean = true;

  constructor(protected componentUtils: ComponentUtils,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit(): void {

    this.componentUtils.generateInputId(this);

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["errorMessage"], (() => this.isError = !this.applicationUtils.isStringEmpty(this.errorMessage)))
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  inputValueChanged(): void {

    if (this.autoTrim) {

      this.value = this.componentUtils.trim(this.value);
    }

    this.valueChange.emit(this.value);
  }
}
