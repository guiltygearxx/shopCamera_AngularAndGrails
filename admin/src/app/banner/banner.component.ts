import { Component, OnInit } from '@angular/core';
import {UploadFilePopupComponent} from "../upload-file-popup/upload-file-popup.component";
import {ValidateUtils} from "../common/validate/validate-utils";
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor( protected validateUtils: ValidateUtils,
               protected dialogService: DialogService) { }

  image1: string;

  ngOnInit() {
    this.image1 = null;
  }


  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  inputIconClick(event: any, field: string): void {

    this.openUploadImagePopup(field);
  }

  protected openUploadImagePopup(field: string): void {

    this.dialogService
      .addDialog(UploadFilePopupComponent)
      .subscribe((url) => {

        if (!this.applicationUtils.isStringEmpty(url)) this.form[field] = url
      });
  }
}
