import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {AdminLteInputModal} from "../admin-lte-input-modal";
import {BaseInputModal} from "../base-input-modal";
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from "../on-change-call-back";
import {ComponentUtils} from "../component-utils";

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent
  implements OnInit, BaseInputModal, AdminLteInputModal, SupportOnChangesComponentModal, OnChanges, AfterContentChecked {

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
  isRequired: boolean;

  @Input()
  disabled: boolean;

  @Input()
  value: any;

  @Input()
  valueWhenChecked: any = true;

  checked: boolean;

  constructor(protected componentUtils: ComponentUtils) {
  }

  ngOnInit() {

    this.componentUtils.generateInputId(this);

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["value", "valueWhenChecked"], (() => this.initChecked())),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  checkedChanged(event: any): void {

    this.valueChange.emit(this.value = this.checked ? this.valueWhenChecked : null);
  }

  private initChecked(): void {

    this.checked = (this.value == this.valueWhenChecked);
  }
}
