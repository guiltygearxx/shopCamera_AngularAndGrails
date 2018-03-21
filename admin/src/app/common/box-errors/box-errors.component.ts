import {
  AfterContentChecked, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import {SupportOnChangesComponentModal} from '../support-on-changes-component-modal';
import {OnChangeCallBack} from "../on-change-call-back";
import {isNullOrUndefined} from "util";
import {ComponentUtils} from "../component-utils";

@Component({
  selector: 'app-box-errors',
  templateUrl: './box-errors.component.html',
  styleUrls: ['./box-errors.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxErrorsComponent
  implements OnInit, SupportOnChangesComponentModal, AfterContentChecked, OnChanges {

  afterViewCheckCallbacks: OnChangeCallBack[];

  afterContentCheckCallbacks: OnChangeCallBack[];

  viewChangedAttrs: string[];

  contentChangedAttrs: string[];

  @Input()
  errorMessages: string[];

  isError: boolean;

  constructor(protected componentUtils: ComponentUtils) {
  }

  ngOnInit() {

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["errorMessages"], (() =>

          this.isError = !isNullOrUndefined(this.errorMessages) && this.errorMessages.length > 0
      )),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }
}
