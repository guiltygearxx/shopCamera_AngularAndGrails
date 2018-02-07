import {Component, Input, OnInit} from '@angular/core';
import {BaseInputText} from "../base-form/base-input-text";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends BaseInputText {

  @Input()
  customClass: string;

  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  typeInput: string = "text";

}
