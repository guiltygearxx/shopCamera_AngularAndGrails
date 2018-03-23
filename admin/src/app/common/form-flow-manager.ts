import {Injectable} from '@angular/core';
import {SupportSubmitForm} from './support-submit-form';
import {ResultBean} from './result-bean';
import {ToasterService} from 'angular2-toaster';
import {ApplicationUtils} from './application-utils';
import {Validateable} from './validate/validateable';
import {ValidateUtils} from './validate/validate-utils';
import {RequestErrorHandler} from './request-error-handler';
import {isNullOrUndefined} from 'util';
import {HTTP_STATUS_FORBIDDEN} from './application-constants';

@Injectable()
export class FormFlowManager {

  constructor(protected toasterService: ToasterService,
              protected applicationUtils: ApplicationUtils,
              protected validateUtils: ValidateUtils) {
  }

  defaultHandleError(error: any): void {

    switch (error.status) {

      case HTTP_STATUS_FORBIDDEN:
        var message = this.applicationUtils.message('default.' + error.status);
        this.displayErrorMessage(message);
        break;

      default:
        var message = this.applicationUtils.message('default.unknownError');
        this.displayErrorMessage(message);
        console.log(error);
        break;
    }
  }

  submitForm(form: SupportSubmitForm<ResultBean>, errorHandler?: RequestErrorHandler): void {

    this.submitFormForDefaultRestService(form, errorHandler);
  }

  submitFormForDefaultRestService<T>(form: SupportSubmitForm<T>, errorHandler?: RequestErrorHandler): void {

    form.errorMessages = [];

    if (!form.validate()) return;

    form.submit().subscribe(
      (resultBean) => form.afterSubmit(resultBean),

      ((error) => {

        if (!isNullOrUndefined(errorHandler)) {

          errorHandler.handle(error);
        } else {

          this.defaultHandleError(error);
        }
      }),
    );
  }

  processResultBean(form: SupportSubmitForm<ResultBean>, resultBean: ResultBean): void {

    form.resultBean = resultBean;

    if (resultBean.isSuccess) {

      let successMessage = this.applicationUtils.message('default.success');

      this.displaySuccessMessage(successMessage);

    } else {

      form.errorMessages = resultBean.errors.map((error) =>

        this.applicationUtils.message(error.errorCode, error.params)
      );
    }
  }

  processResultBeanForDefaultRestService<T>(form: SupportSubmitForm<T>, resultBean: T): void {

    form.resultBean = resultBean;

    let successMessage = this.applicationUtils.message('default.success');

    this.displaySuccessMessage(successMessage);
  }

  displaySuccessMessage(message: string): void {

    this.toasterService.pop({type: 'success', title: message});
  }

  displayErrorMessage(message: string): void {

    this.toasterService.pop({type: 'error', title: message});
  }

  convertToErrorMessages(items: Validateable[], constraints: any, errorMessages: string[],
                         buildErrorMessageFieldFn: ((item: Validateable, itemIndex: number, field: string) => string)): void {

    let fields: string[] = Object.keys(constraints);

    items.forEach((item, itemIndex) => {

      fields.forEach((field) => {

        let errorMessage = buildErrorMessageFieldFn(item, itemIndex, field);

        if (this.applicationUtils.isStringEmpty(errorMessage)) return;

        errorMessages.push(errorMessage);
      });
    });
  }

  buildErrorMessageField(item: Validateable, itemIndex: number, field: string,
                         getFieldTitleFn: ((field: string) => string)): string {

    let errorMessage = this.validateUtils.getFieldErrorMessage(field, item);

    if (this.applicationUtils.isStringEmpty(errorMessage)) return null;

    return this.applicationUtils.message('importProduct.message.field', [

      itemIndex + 1, getFieldTitleFn(field), errorMessage
    ]);
  }

  validateForm(form: SupportSubmitForm<any>, formData: Validateable, constraints: any): boolean {

    let validateResult = this.validateUtils.validate(formData, constraints);

    if (!validateResult) {

      form.errorMessages.push(this.applicationUtils.message('default.form.error'));
    }

    return validateResult;
  }
}
