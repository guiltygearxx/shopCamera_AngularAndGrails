import {Component, Input, OnInit} from '@angular/core';
import {BaseFormInput} from "../base-form/base-form-input";

declare var $: any;

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent extends BaseFormInput {

  @Input()
  customClass: string;

  @Input()
  disabled: boolean = false;

  @Input()
  title: string;

  @Input()
  icon: string;

  inputValueChanged(): void {

    this.value = $(this.inputElement.nativeElement).prop("files")[0];

    super.inputValueChanged();
  }
}
