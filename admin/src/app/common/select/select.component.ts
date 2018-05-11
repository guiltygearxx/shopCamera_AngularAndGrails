import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {BaseInputModal} from '../base-input-modal';
import {SupportValidateInputModal} from '../support-validate-input-modal';
import {SupportOnChangesComponentModal} from '../support-on-changes-component-modal';
import {AdminLteInputModal} from '../admin-lte-input-modal';
import {OnChangeCallBack} from '../on-change-call-back';
import {ComponentUtils} from '../component-utils';
import {ApplicationUtils} from '../application-utils';
import {SelectOption} from '../select-option';
import {isNullOrUndefined, isString} from 'util';

type OptionKeyType = (string | ((item: any) => any));

type OptionValueType = (string | ((item: any) => string));

declare var $: any;

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent
  implements OnInit, BaseInputModal, SupportValidateInputModal,
    AdminLteInputModal, SupportOnChangesComponentModal, OnChanges, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

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
  data: any[];

  @Input()
  optionKey: OptionKeyType;

  @Input()
  optionValue: OptionValueType;

  selectOptions: SelectOption[];

  @ViewChild('inputElement')
  inputElement: ElementRef;

  @Input()
  autoSort: boolean = true;

  private select2SettingOptions: any;

  private refreshTimer: any;

  constructor(protected componentUtils: ComponentUtils,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit() {

    this.componentUtils.generateInputId(this);

    this.select2SettingOptions = {liveSearch: 'true', noneSelectedText: this.placeHolder};

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(['errorMessage'], (() => this.isError = !this.applicationUtils.isStringEmpty(this.errorMessage))),

      new OnChangeCallBack(['optionKey', 'optionValue', 'data', 'autoSort', 'placeHolder'], (() => this.buildSelectOptions())),
    ];

    this.afterViewCheckCallbacks = [

      new OnChangeCallBack(['optionKey', 'optionValue', 'data', 'autoSort', 'placeHolder', 'value'], (() => {

        setTimeout(() => $(this.inputElement.nativeElement).selectpicker('refresh'), 100);
      })),
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

  ngAfterViewInit(): void {

    $(this.inputElement.nativeElement).selectpicker(this.select2SettingOptions);
  }

  ngOnDestroy(): void {

    if (this.refreshTimer) {

      clearTimeout(this.refreshTimer);

      this.refreshTimer = null;
    }
  }

  valueChanged(event: any): void {

    this.valueChange.emit($(event.target).val());
  }

  private buildSelectOptions(): void {

    this.selectOptions = [];

    if (isNullOrUndefined(this.data) || !this.data.length) return;

    this.selectOptions = this.data.map((item) => new SelectOption(
      this.getOptionKeyValue(item, this.optionKey),
      this.getOptionKeyValue(item, this.optionValue),
    ));

    if (this.autoSort) {

      this.selectOptions.sort((item1, item2) =>

        this.applicationUtils.compareString(item1.name, item2.name)
      );
    }

    if (this.placeHolder) {

      this.selectOptions = [new SelectOption(null, this.placeHolder)].concat(this.selectOptions || []);
    }
  }

  private getOptionKeyValue(item: any, optionKeyValue: (OptionKeyType | OptionValueType)): any {

    if (isString(optionKeyValue)) {

      return isNullOrUndefined(item) ? null : item[optionKeyValue as string];
    } else {

      return (optionKeyValue as Function)(item);
    }
  }

  private refreshSelectPicker(): void {

    if (this.refreshTimer) clearTimeout(this.refreshTimer);

    this.refreshTimer = setTimeout(() => {

      $(this.inputElement.nativeElement).selectpicker('refresh'), 100;

      this.refreshTimer = null;
    });
  }
}
