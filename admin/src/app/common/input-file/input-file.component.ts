import {
  AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {BaseInputModal} from '../base-input-modal';
import {SupportValidateInputModal} from '../support-validate-input-modal';
import {AdminLteInputModal} from '../admin-lte-input-modal';
import {SupportOnChangesComponentModal} from '../support-on-changes-component-modal';
import {OnChangeCallBack} from '../on-change-call-back';
import {ComponentUtils} from '../component-utils';
import {ApplicationUtils} from '../application-utils';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputFileComponent
  implements OnInit, BaseInputModal, SupportValidateInputModal,
    AdminLteInputModal, SupportOnChangesComponentModal, OnChanges, AfterContentChecked, AfterViewChecked {

  @ViewChild('inputElement')
  inputElement: ElementRef;

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

      new OnChangeCallBack(['errorMessage'], (() => this.isError = !this.applicationUtils.isStringEmpty(this.errorMessage))),
    ];

    this.afterViewCheckCallbacks = [

      new OnChangeCallBack(['value'], (() => this.updateInputFile())),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  ngAfterViewChecked(): void {

    this.componentUtils.runAfterViewCheckedCallback(this);
  }

  inputValueChanged(event: any): void {

    this.value = $(event.target).prop('files')[0];

    this.valueChange.emit(this.value);
  }

  protected updateInputFile(): void {

    if (isNullOrUndefined(this.value)) {

      $(this.inputElement.nativeElement).val(null);
    }
  }
}

