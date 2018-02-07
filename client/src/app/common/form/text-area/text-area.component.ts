import {Component, Input, OnInit} from '@angular/core';
import {BaseInputText} from "../base-form/base-input-text";

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent extends BaseInputText {

  @Input()
  customClass: string;

  @Input()
  disabled: boolean = false;

  @Input()
  title: string;

  @Input()
  icon: string;

  autoSize(): void {

    let nativeElement = this.inputElement.nativeElement;
    let style = nativeElement.style;

    style.overflow = 'hidden';
    style.height = 'auto';
    style.height = nativeElement.scrollHeight + "px";
  }

}
