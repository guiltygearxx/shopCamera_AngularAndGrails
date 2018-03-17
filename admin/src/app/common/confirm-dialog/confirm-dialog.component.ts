import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {ConfirmDialogModal} from '../confirm-dialog-modal';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent
  extends DialogComponent<ConfirmDialogModal, boolean>
  implements OnInit, ConfirmDialogModal {

  message: string;

  constructor(protected dialogService: DialogService) {

    super(dialogService)
  }

  ngOnInit() {

    this.result = false;
  }

  cancel(event: any): void {

    event.preventDefault();

    this.result = false;

    this.close();
  }

  confirm(event: any): void {

    event.preventDefault();

    this.result = true;

    this.close();
  }
}
