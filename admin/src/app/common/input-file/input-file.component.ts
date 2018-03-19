import {
  AfterContentChecked, ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {BaseInputModal} from "../base-input-modal";
import {SupportValidateInputModal} from '../support-validate-input-modal';
import {AdminLteInputModal} from "../admin-lte-input-modal";
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from "../on-change-call-back";
import {ComponentUtils} from "../component-utils";
import {ApplicationUtils} from "../application-utils";

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFileComponent
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

  constructor(protected componentUtils: ComponentUtils,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit(): void {

    this.componentUtils.generateInputId(this);

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["errorMessage"], (() => this.isError = !this.applicationUtils.isStringEmpty(this.errorMessage))),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  inputValueChanged(event: any): void {

    this.value = $(event.target).prop("files")[0];

    this.valueChange.emit(this.value);
  }
}

