import {SupportSubmitForm} from './support-submit-form';
import {Observable} from 'rxjs/Observable';
import {ApplicationUtils} from './application-utils';
import {RestService} from './rest-service';
import {FormFlowManager} from './form-flow-manager';
import {ValidateUtils} from './validate/validate-utils';
import {OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Validateable} from './validate/validateable';

export abstract class DefaultDetailComponent<DetailForm extends Validateable, BaseDomain>
  implements SupportSubmitForm<BaseDomain>, OnInit {

  form: DetailForm;

  errorMessages: string[];

  resultBean: BaseDomain;

  protected id: any;

  protected abstract getDetailFormConstraints(): any;

  protected abstract convertToBaseDomain(): BaseDomain;

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

  submit(): Observable<BaseDomain> {

    return this.applicationUtils.isStringEmpty(this.id) ?
      this.domainRestService.post(this.convertToBaseDomain()) :
      this.domainRestService.put(this.convertToBaseDomain(), this.id);
  }

  afterSubmit(result: BaseDomain): void {

    this.formFlowManager.processResultBeanForDefaultRestService(this, result);

    this.form = this.bindDataToForm(result);
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitFormForDefaultRestService(this);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
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
