import {Component, OnInit} from '@angular/core';
import {ValidateUtils} from '../common/validate/validate-utils';
import {DialogService} from 'ng2-bootstrap-modal';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(protected validateUtils: ValidateUtils,
              protected dialogService: DialogService) {
  }

  image1: string;

  ngOnInit() {
    this.image1 = null;
  }

  getErrorMessage(field: string): string {

    return '';
  }

  inputIconClick(event: any, field: string): void {

    this.openUploadImagePopup(field);
  }

  protected openUploadImagePopup(field: string): void {


  }
}
