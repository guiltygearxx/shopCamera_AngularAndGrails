import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isNullOrUndefined} from "util";
import {GroupActionsConfiguration} from "./group-actions-configuration";
import {ActionConfiguration} from "./action-configuration";

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.css']
})
export class DropDownButtonComponent implements OnInit {

  @Input()
  groupActionsConfig: GroupActionsConfiguration;

  @Output()
  doAction: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  customClass: string = "btn-sm";

  constructor() {
  }

  get actionConfigs(): ActionConfiguration[] {

    return isNullOrUndefined(this.groupActionsConfig) ? null : this.groupActionsConfig.actionConfigs;
  }

  get primitiveAction(): ActionConfiguration {

    return this.actionConfigs[0];
  }

  get otherActions(): ActionConfiguration[] {

    let primitiveAction = this.primitiveAction;

    return this.actionConfigs.filter(config => config != primitiveAction);
  }

  ngOnInit() {
  }

  selectAction(actionCode: string): void {

    this.doAction.emit(actionCode);
  }
}
