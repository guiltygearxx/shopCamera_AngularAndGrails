import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ApplicationUtils} from "../../common/application-utils";
import {SupportOnChangesComponentModal} from "../../common/support-on-changes-component-modal";
import {OnChangeCallBack} from "../../common/on-change-call-back";
import {ComponentUtils} from "../../common/component-utils";

declare var $: any;

declare var noUiSlider: any;

@Component({
  selector: 'app-filter-slider',
  templateUrl: './filter-slider.component.html',
  styleUrls: ['./filter-slider.component.css']
})
export class FilterSliderComponent
  implements OnInit, AfterViewInit, SupportOnChangesComponentModal, AfterViewChecked, OnChanges, AfterContentInit, AfterContentChecked {

  @ViewChild("priceSlider")
  priceSlider: ElementRef;

  @ViewChild("fromValueInput")
  fromValueInput: ElementRef;

  @ViewChild("toValueInput")
  toValueInput: ElementRef;

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

  fromValue: number;
  toValue: number;

  constructor(protected applicationUtils: ApplicationUtils,
              protected componentUtils: ComponentUtils) {
  }

  ngOnInit() {

    this.afterViewCheckCallbacks = [

      new OnChangeCallBack(["value"], (() => this.updateSlider("value"))),
    ];

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["value"], (() => {

        this.fromValue = this.value[0];
        this.toValue = this.value[1];
      })),
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

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  ngAfterContentInit(): void {

    this.fromValue = this.value[0];
    this.toValue = this.value[1];
  }

  rangeValueChanged(event: any): void {

    var fromValueStr = $(this.fromValueInput.nativeElement).val();
    var toValueStr = $(this.toValueInput.nativeElement).val();

    this.priceSlider.nativeElement.noUiSlider.set([fromValueStr, toValueStr]);
  }

  private initSlider(): void {

    noUiSlider.create(this.priceSlider.nativeElement, {
      start: [this.fromValue, this.toValue], connect: true, step: this.step, range: {'min': this.min, 'max': this.max}
    });

    this.priceSlider.nativeElement.noUiSlider.on('change', (values, handle) => {

      var value = values[handle];

      (handle) ? (this.toValue = value) : (this.fromValue = value);

      this.value[0] = this.fromValue;
      this.value[1] = this.toValue;

      this.valueChange.emit(this.value);
    });

    this.priceSlider.nativeElement.noUiSlider.on('update', (values, handle) => {

      var value = values[handle];

      (handle) ? ($(this.toValueInput.nativeElement).val(value)) : ($(this.fromValueInput.nativeElement).val(value));
    });
  }

  private updateSlider(inputParam: string): void {

    switch (inputParam) {

      case "value":
        this.priceSlider.nativeElement.noUiSlider.set(this.value);
        return;
    }
  }
}
