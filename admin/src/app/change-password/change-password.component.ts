import {Component, OnInit} from '@angular/core';
import {SupportSubmitForm} from '../common/support-submit-form';
import {ResultBean} from '../common/result-bean';
import {Observable} from 'rxjs/Observable';
import {ChangePasswordForm} from '../bean/change-password-form';
import {FormFlowManager} from '../common/form-flow-manager';
import {ApplicationUtils} from '../common/application-utils';
import {UserService} from '../service/user.service';
import {ValidateUtils} from '../common/validate/validate-utils';
import {ChangePasswordForm2} from '../bean/change-password-form-2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent
  implements OnInit, SupportSubmitForm<ResultBean> {

  errorMessages: string[];

  resultBean: ResultBean;

  form: ChangePasswordForm;

  constructor(protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils,
              protected userService: UserService,
              protected validateUtils: ValidateUtils) {
  }

  ngOnInit() {

    this.form = new ChangePasswordForm();
  }

  changePassword(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this);
  }

  validate(): boolean {

    return this.validateForm() && this.validateNewPassword();
  }

  submit(): Observable<ResultBean> {

    let submitForm = new ChangePasswordForm2();

    submitForm.oldPassword = this.form.oldPassword;
    submitForm.newPassword = this.form.newPassword;

    return this.userService.changePassword(submitForm);
  }

  afterSubmit(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  protected validateForm(): boolean {

    return this.formFlowManager.validateForm(this, this.form, ChangePasswordForm.constraints);
  }

  protected validateNewPassword(): boolean {

    if (this.form.newPassword != this.form.confirmPassword) {

      this.errorMessages.push(this.applicationUtils.message('changePassword.newPasswordNotMatchWithConfirmPassword'));
    }

    return true;
  }
}
