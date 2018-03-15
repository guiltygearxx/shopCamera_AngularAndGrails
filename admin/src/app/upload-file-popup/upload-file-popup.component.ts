import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";
import {UploadFileForm} from "../bean/upload-file-form";
import {FormFlowManager} from "../common/form-flow-manager";
import {SupportSubmitForm} from "../common/support-submit-form";
import {ResultBean} from "../common/result-bean";
import {Observable} from "rxjs/Observable";
import {ValidateUtils} from '../common/validate/validate-utils';
import {UploadFileService} from "../service/upload-file.service";
import {UploadFile} from "../bean/upload-file";

@Component({
  selector: 'app-upload-file-popup',
  templateUrl: './upload-file-popup.component.html',
  styleUrls: ['./upload-file-popup.component.css']
})
export class UploadFilePopupComponent extends DialogComponent<any, string>
  implements OnInit, SupportSubmitForm {

  errorMessages: string[];

  resultBean: ResultBean;

  form: UploadFileForm;

  constructor(protected dialogService: DialogService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected uploadFileService: UploadFileService) {

    super(dialogService);
  }

  ngOnInit(): void {

    this.form = new UploadFileForm();
  }

  uploadFile(event: any): void {

    this.formFlowManager.submitForm(this);
  }

  cancel(event: any): void {

    event.preventDefault();

    this.close();
  }

  validate(): boolean {

    return this.validateForm();
  }

  submit(): Observable<ResultBean> {

    return this.uploadFileService.uploadFile(this.form.file);
  }

  afterSubmit(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);

    if (resultBean.isSuccess) {

      let uploadFile: UploadFile = resultBean.result.uploadFile;

      this.result = this.uploadFileService.getDownloadLink(uploadFile);

      this.close();
    }
  }

  private validateForm(): boolean {

    let validateResult = this.validateUtils.validate(this.form, UploadFileForm.constraints);

    return validateResult;
  }
}
