import {ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {isStringEmpty, randomNumber} from "../../../service/utils/application-utils";

export class BaseFormInput implements OnInit {
  @ViewChild("inputElement")
  inputElement: ElementRef;

  @Input()
  value: any;

  @Output()
  valueChange: EventEmitter<any> = new EventEmitter();

  inputId: string;

  @Input()
  name: string;

  @Input()
  isRequired: boolean;

  @Input()
  errorMessage: string;

  ngOnInit(): void {

    this.generateInputId();
  }

  protected generateInputId(): void {

    this.inputId = `${this.name ? this.name : ""}${randomNumber()}`;
  }

  inputValueChanged(): void {

    this.valueChange.emit(this.value);
  }

  get isError() {

    return !isStringEmpty(this.errorMessage);
  }
}
