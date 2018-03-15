import {Injectable} from "@angular/core";
import {SupportSubmitForm} from "./support-submit-form";
import {ResultBean} from "./result-bean";
import {ToasterService} from "angular2-toaster";
import {ApplicationUtils} from "./application-utils";
import {Validateable} from "./validate/validateable";
import {ValidateUtils} from "./validate/validate-utils";
import {PaginationParams} from "./pagination-params";
import {SupportPaginationTable} from "./support-pagination-table";

@Injectable()
export class FormFlowManager {

  constructor(protected toasterService: ToasterService,
              protected applicationUtils: ApplicationUtils,
              protected validateUtils: ValidateUtils) {
  }

  submitForm(form: SupportSubmitForm): void {

    form.errorMessages = [];

    if (!form.validate()) return;

    form.submit().subscribe((resultBean) => form.afterSubmit(resultBean));
  }

  processResultBean(form: SupportSubmitForm, resultBean: ResultBean): void {

    form.resultBean = resultBean;

    if (resultBean.isSuccess) {

      let successMessage = this.applicationUtils.message("default.success");

      this.displaySuccessMessage(successMessage);

    } else {

      form.errorMessages = resultBean.errors.map((error) =>

        this.applicationUtils.message(error.errorCode, error.params)
      );
    }
  }

  displaySuccessMessage(successMessage: string): void {

    this.toasterService.pop({type: 'success', title: successMessage});
  }

  convertToErrorMessages(items: Validateable[], constraints: any, errorMessages: string[],
                         buildErrorMessageFieldFn: ((item: Validateable, itemIndex: number, field: string) => string)): void {

    let fields: string[] = Object.keys(constraints);

    items.forEach((item, itemIndex) => {

      fields.forEach((field) => {

        let errorMessage = buildErrorMessageFieldFn(item, itemIndex, field);

        if (this.applicationUtils.isStringEmpty(errorMessage)) return;

        errorMessages.push(errorMessage);
      })
    });
  }

  buildErrorMessageField(item: Validateable, itemIndex: number, field: string,
                         getFieldTitleFn: ((field: string) => string)): string {

    let errorMessage = this.validateUtils.getFieldErrorMessage(field, item);

    if (this.applicationUtils.isStringEmpty(errorMessage)) return null;

    return this.applicationUtils.message("importProduct.message.field", [

      itemIndex + 1, getFieldTitleFn(field), errorMessage
    ]);
  }
}
