import { Component, OnInit } from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {ConfirmDialogModal} from "./confirm-dialog-modal";
import {GroupActionsConfiguration} from "../form/drop-down-button/group-actions-configuration";
import {ActionConfiguration} from "../form/drop-down-button/action-configuration";

const CONFIRM_GROUP_ACTION = new GroupActionsConfiguration(
  [new ActionConfiguration("confirm", "Xác nhận")]
)

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent extends DialogComponent<ConfirmDialogModal, boolean> implements ConfirmDialogModal {

  confirmMessage: string;

  groupActionsConfig: GroupActionsConfiguration = CONFIRM_GROUP_ACTION;

  constructor(protected dialogService: DialogService) {

    super(dialogService);
  }

  cancel(): void {

    this.result = false;

  this.close();
}

  confirm(event: any): void {

    this.result = true;

  this.close();
}
}
