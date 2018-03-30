import {Validateable} from './validate/validateable';
import {SupportSubmitForm} from './support-submit-form';
import {OnInit} from '@angular/core';
import {ResultBean} from './result-bean';
import {Observable} from 'rxjs/Observable';
import {ApplicationUtils} from './application-utils';
import {RestService} from './rest-service';
import {FormFlowManager} from './form-flow-manager';
import {ValidateUtils} from './validate/validate-utils';
import {ActivatedRoute} from '@angular/router';
import {RequestErrorHandler} from './request-error-handler';

export abstract class DefaultDetailComponent2<DetailForm extends Validateable, BaseDomain>
  implements SupportSubmitForm<ResultBean>, OnInit, RequestErrorHandler {

  form: DetailForm;

  errorMessages: string[];

  resultBean: ResultBean;

  protected id: any;

  abstract submit(): Observable<ResultBean>;

  protected abstract getDetailFormConstraints(): any;

  protected abstract bindDataToForm(object: BaseDomain): DetailForm;

  protected abstract initForCreate(): DetailForm;

  constructor(protected  applicationUtils: ApplicationUtils,
              protected domainRestService: RestService<BaseDomain>,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.applicationUtils.isStringEmpty(this.id)) {

      this.initForEdit();
    } else {

      this.form = this.initForCreate();
    }
  }

  validate(): boolean {

    return this.validateForm();
  }

  afterSubmit(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitForm(this, this);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  handle(error: any): void {

    this.formFlowManager.defaultHandleError(error);
  }

  protected initForEdit(): void {

    this.domainRestService.getById(this.id).subscribe((object) => {

      this.afterGetById(object);
    });
  }

  protected afterGetById(object: BaseDomain): void {

    this.form = this.bindDataToForm(object);
  }

  protected validateForm(): boolean {

    return this.formFlowManager.validateForm(this, this.form, this.getDetailFormConstraints());
  }
}
