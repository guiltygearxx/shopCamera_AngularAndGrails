import {Component} from '@angular/core';
import {DefaultDetailComponent} from '../common/default-detail-component';
import {CategoryDetailForm} from '../bean/category-detail-form';
import {Category} from '../bean/category';
import {DialogService} from 'ng2-bootstrap-modal';
import {ActivatedRoute} from '@angular/router';
import {ApplicationUtils} from '../common/application-utils';
import {ValidateUtils} from '../common/validate/validate-utils';
import {FormFlowManager} from '../common/form-flow-manager';
import {CategoryService} from '../service/category.service';
import {isNullOrUndefined} from 'util';
import {RequestErrorHandler} from '../common/request-error-handler';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent
  extends DefaultDetailComponent<CategoryDetailForm, Category>
  implements RequestErrorHandler {

  parentCategories: Category[];

  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: CategoryService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new CategoryDetailForm();

    this.loadCategories();

    super.ngOnInit();
  }

  handle(error: any): void {

    this.formFlowManager.defaultHandleError(error);
  }


  protected getDetailFormConstraints(): any {
    return CategoryDetailForm.constraints;
  }

  protected convertToBaseDomain(): Category {

    let category = new Category();

    category.parentCategoryId = this.form.parentCategoryId;
    category.name = this.form.name;
    category.code = this.form.code;

    return category;
  }

  protected bindDataToForm(object: Category): CategoryDetailForm {

    let form = new CategoryDetailForm();

    form.parentCategoryId = object.parentCategoryId;
    form.name = object.name;
    form.code = object.code;

    return form;
  }

  protected initForCreate(): CategoryDetailForm {

    return new CategoryDetailForm();
  }

  protected loadCategories(): void {

    this.domainRestService.get().subscribe(
      (items) => (this.parentCategories = isNullOrUndefined(items) ? null : items.filter((item) =>

          this.applicationUtils.isStringEmpty(item.parentCategoryId))
      ).sort((item1, item2) =>

        this.applicationUtils.compareString(item1.name, item2.name)
      ),

      (error) => this.handle(error)
    );
  }
}
