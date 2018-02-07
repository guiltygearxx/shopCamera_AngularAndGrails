import {
  AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {isNullOrUndefined} from "util";
import {isPropertyChanges, randomNumber} from "../../../service/utils/application-utils";
import {RadioOption} from "../base-form/radio-option";

declare var $: any;

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit, OnChanges, AfterViewChecked {

  @ViewChild("inputElement")
  inputElement: ElementRef;

  @Input()
  disabled: boolean = false;

  id: string;

  @Input()
  radioOption: RadioOption;

  @Input()
  radioGroup: string;

  @Output()
  clicked: EventEmitter<any> = new EventEmitter();

  @Input()
  checked: boolean;

  private checkRadioFn: () => void;

  ngOnInit(): void {

    this.id = randomNumber().toString();
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (isPropertyChanges(changes, "checked")) {

      this.checkRadioFn = () => {

        this.checkRadio();
      }
    }
  }

  ngAfterViewChecked(): void {

    if (!isNullOrUndefined(this.checkRadioFn)) {

      this.checkRadioFn();

      this.checkRadioFn = null;
    }
  }

  clickEvent(): void {

    this.clicked.emit(this.radioOption.value);
  }

  private checkRadio(): void {

    let isChecked = isNullOrUndefined(this.checked) ? false : this.checked;

    $(this.inputElement.nativeElement).prop("checked", isChecked);
  }
}
