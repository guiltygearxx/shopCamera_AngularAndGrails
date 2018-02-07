import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GroupActionsConfiguration} from "../../form/drop-down-button/group-actions-configuration";

@Component({
  selector: 'app-default-modal-footer',
  templateUrl: './default-modal-footer.component.html',
  styleUrls: ['./default-modal-footer.component.css']
})
export class DefaultModalFooterComponent implements OnInit {

  @Input()
  groupActionsConfig: GroupActionsConfiguration;

  @Output()
  action: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  cancel: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  doAction(actionCode: string) {

    this.action.emit(actionCode);
  }

  cancelAction(event: any): void {

    this.cancel.emit(event);
  }

}
