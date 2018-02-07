import {AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BaseFormInput} from "../base-form/base-form-input";
import {isNullOrUndefined} from "util";
import {isPropertyChanges} from "../../../service/utils/application-utils";

declare var $: any;

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent extends BaseFormInput implements AfterViewInit, OnChanges, AfterViewChecked{

  @Input()
  customClass: string;

  @Input()
  disabled: boolean = false;

  @Input()
  title: string;

  @Input()
  valueWhenChecked: any = true;

  private initCheckBoxFn: () => void;

  ngOnInit(): void {

    super.ngOnInit();

    if (isNullOrUndefined(this.valueWhenChecked))
      this.valueWhenChecked = true;
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (isPropertyChanges(changes, "value") || isPropertyChanges(changes, "valueWhenChecked")) {

      this.initCheckBoxFn = () => this.initCheckBox();
    }
  }

  ngAfterViewInit(): void {

    $(this.inputElement.nativeElement).change((event) => this.checkboxChanged());
  }

  ngAfterViewChecked(): void {

    if (!isNullOrUndefined(this.initCheckBoxFn)) {

      this.initCheckBoxFn();

      this.initCheckBoxFn = null;
    }
  }

  private checkboxChanged(): void {

    this.value = $(this.inputElement.nativeElement).is(":checked") ? this.valueWhenChecked : null;

    this.inputValueChanged();
  }

  private initCheckBox(): void {

    $(this.inputElement.nativeElement).prop("checked", (this.valueWhenChecked == this.value));
  }

}
