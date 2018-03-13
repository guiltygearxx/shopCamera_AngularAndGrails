import {SupportSubmitForm} from "../common/support-submit-form";
import {ResultBean} from "../common/result-bean";
import {Observable} from "rxjs/Observable";
import {ProductForm} from "../bean/product-form";
import {ValidateUtils} from "../common/validate/validate-utils";
import {ProductService} from "../service/product.service";
import {FormFlowManager} from "../common/form-flow-manager";
import {ApplicationUtils} from "../common/application-utils";

export class ProductDetailLogic implements SupportSubmitForm {

  form: ProductForm;

  errorMessages: string[];

  resultBean: ResultBean;

  constructor(protected validateUtils: ValidateUtils,
              protected productService: ProductService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
  }

  validate(): boolean {

    return this.validateForm();
  }

  submit(): Observable<ResultBean> {

    return this.productService.updateProduct(this.form);
  }

  afterSubmit(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);
  }

  private validateForm(): boolean {

    let validateResult = this.validateUtils.validate(this.form, ProductForm.constraints);

    if (!validateResult) {

      this.errorMessages.push(this.applicationUtils.message("default.form.error"));
    }

    return validateResult;
  }

}
