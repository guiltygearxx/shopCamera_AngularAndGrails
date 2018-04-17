import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input, OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ApplicationUtils} from "../../common/application-utils";
import {isArray, isNullOrUndefined} from "util";
import {SupportOnChangesComponentModal} from "../../common/support-on-changes-component-modal";
import {OnChangeCallBack} from "../../common/on-change-call-back";
import {ComponentUtils} from "../../common/component-utils";

declare var $: any;

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent implements OnInit, AfterViewInit, SupportOnChangesComponentModal, AfterViewChecked, OnChanges {

  afterContentCheckCallbacks: OnChangeCallBack[];

  afterViewCheckCallbacks: OnChangeCallBack[];

  contentChangedAttrs: string[];

  viewChangedAttrs: string[];

  @ViewChild("inputElement")
  inputElement: ElementRef;

  @Input()
  max: number;

  @Input()
  min: number;

  @Input()
  step: number;

  @Output()
  valueChange: EventEmitter<number[]> = new EventEmitter<number[]>();

  @Input()
  value: number[];

  constructor(protected applicationUtils: ApplicationUtils,
              protected componentUtils: ComponentUtils) {
  }

  ngOnInit() {

    this.afterViewCheckCallbacks = [

      new OnChangeCallBack(["value"], (() => this.updateSlider("value"))),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterViewInit(): void {

    this.initSlider();
  }

  ngAfterViewChecked(): void {

    this.componentUtils.runAfterViewCheckedCallback(this);
  }

  private initSlider(): void {

    let value_ = this.value;

    if (isNullOrUndefined(value_)) value_ = [this.min, this.max];

    $(this.inputElement.nativeElement)
      .bootstrapSlider({
        min: this.min, max: this.max, step: this.step, value: value_,
        formatter: ((value) => this.format(value))
      })
      .on('change', ((event) => this.rangeChanged_(event)));
  }

  private updateSlider(inputParam: string): void {

    switch (inputParam) {

      case "max":
        $(this.inputElement.nativeElement).data('bootstrapSlider').max = this.max;
        break;

      case "min":
        $(this.inputElement.nativeElement).data('bootstrapSlider').min = this.min;
        break;

      case "step":
        $(this.inputElement.nativeElement).data('bootstrapSlider').step = this.step;
        break;

      case "value":
        let value_ = this.value;
        if (isNullOrUndefined(value_)) value_ = [this.min, this.max];
        $(this.inputElement.nativeElement).bootstrapSlider("setValue", value_);
        return;
    }

    $(this.inputElement.nativeElement).bootstrapSlider("refresh");
  }

  private rangeChanged_(event: any): void {

    this.valueChange.emit(event.value.newValue);
  }

  private format(value: (number | number[])): string {

    if (!isArray(value)) return value.toString();

    let from = value[0];

    let to = value[1];

    return [this.formatCurrency(from), this.formatCurrency(to)].join(" - ");
  }

  private formatCurrency(value: number): string {

    if (value >= 1000) {

      return this.applicationUtils.formatNumber2(value / 1000, 2) + " tỉ";

    } else {

      return value.toString() + " triệu";
    }
  }

}
