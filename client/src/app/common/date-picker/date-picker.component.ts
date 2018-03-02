import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {BaseInputModal} from "../base-input-modal";
import {SupportValidateInputModal} from "../support-validate-input-modal";
import {AdminLteInputModal} from "../admin-lte-input-modal";
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from "../on-change-call-back";
import {ComponentUtils} from "../component-utils";
import {ApplicationUtils} from "../application-utils";

declare var $:any;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent
  implements OnInit, BaseInputModal, SupportValidateInputModal,
    AdminLteInputModal, SupportOnChangesComponentModal, OnChanges, AfterContentChecked, AfterViewInit {



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

  @ViewChild("inputElement")
  inputElement: ElementRef;

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

  ngAfterViewInit(): void {

    $(this.inputElement.nativeElement)
      .datepicker({autoclose: true, format: "dd/mm/yyyy"})
      .on("changeDate", (event) => this.changeDate(event));
  }

  inputValueChanged(event: any): void {

    this.valueChange.emit(this.value);
  }

  private changeDate(event: any): void {

    this.value = event.format();

    this.valueChange.emit(this.value);
  }
}
