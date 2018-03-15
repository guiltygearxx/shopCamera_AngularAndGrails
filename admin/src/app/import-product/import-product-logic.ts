import {ImportProductForm} from "../bean/import-product-form";
import {ImportProductRow} from "../bean/import-product-row";
import {ImportProductService} from "../service/import-product.service";
import {CategoryService} from "../service/category.service";
import {Category} from "../bean/category";
import {GroupByWrapper} from "../common/group-by-wrapper";
import {ApplicationUtils} from "../common/application-utils";
import {ImportProductsForm} from "../bean/import-products-form";
import {ResultBean} from "../common/result-bean";
import {SupportSubmitForm} from "../common/support-submit-form";
import {Observable} from "rxjs/Observable";
import {isNullOrUndefined} from "util";
import {ValidateUtils} from "../common/validate/validate-utils";
import {FormFlowManager} from "../common/form-flow-manager";
import {Validateable} from "../common/validate/validateable";

export class ImportProductLogic implements SupportSubmitForm {

  errorMessages: string[];

  form: ImportProductForm;

  items: ImportProductRow[];

  categories: Category[];

  resultBean: ResultBean;

  get isHasData(): boolean {

    return !isNullOrUndefined(this.items) && this.items.length > 0;
  }

  private categoriesMapping: GroupByWrapper<Category> = new GroupByWrapper();

  constructor(protected importProductService: ImportProductService,
              protected categoryService: CategoryService,
              protected applicationUtils: ApplicationUtils,
              protected validateUtils: ValidateUtils,
              protected formFlowManager: FormFlowManager) {
  }

  uploadFile(): void {

    this.importProductService
      .parseFile(this.form.importFile)
      .subscribe((items) => this.afterUploadFile(items));
  }

  loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.afterLoadCategories(categories));
  }

  afterSubmit(resultBean: ResultBean): void {

    this.afterUpdateProducts(resultBean);
  }

  submit(): Observable<ResultBean> {

    let form = new ImportProductsForm();

    form.items = this.items;

    return this.importProductService.importProducts(form);
  }

  validate(): boolean {

    if (!this.isHasData) return true;

    return this.validateForm() && this.validateCategoryNames() && this.validateDuplicateName();
  }

  protected afterUpdateProducts(resultBean: ResultBean): void {

    this.formFlowManager.processResultBean(this, resultBean);
  }

  protected afterUploadFile(items: ImportProductRow[]): void {

    this.items = items;
  }

  protected afterLoadCategories(categories: Category[]): void {

    this.categories = categories;

    this.categoriesMapping.groupBy(this.categories, [(category) => category.name]);
  }

  protected getCategoryByName(categoryName: string): Category {

    return this.categoriesMapping.getItem([categoryName]);
  }

  private validateDuplicateName(): boolean {

    let isOK = true;

    let names_: string[] = [];

    this.items.forEach((item, itemIndex) => {

      if (names_.indexOf(item.name) != -1) {

        isOK = true;

        let errorMessage = this.applicationUtils.message("importProduct.duplicateProductName", [item.name]);

        this.errorMessages.push(this.buildErrorMessageRow(itemIndex, errorMessage));

      } else {

        names_.push(item.name);
      }
    })

    return isOK;
  }

  private validateForm(): boolean {

    let invalidItems = this.items.filter((item) => {

      let validateResult = !this.validateUtils.validate(item, ImportProductRow.constraints);

      return validateResult;
    });

    let validateResult = isNullOrUndefined(invalidItems) || invalidItems.length == 0;

    if (!validateResult) this.convertToErrorMessages();

    return validateResult;
  }

  private validateCategoryNames(): boolean {

    let isOK = true;

    this.items.forEach((item, itemIndex) => {

      let category = this.getCategoryByName(item.categoryName);

      if (isNullOrUndefined(category)) {

        isOK = false;

        let errorMessage = this.applicationUtils.message("importProduct.categoryName.notFound", [item.categoryName]);

        this.errorMessages.push(this.buildErrorMessageRow(itemIndex, errorMessage));
      }
    });

    return isOK;
  }

  private buildErrorMessageRow(itemIndex: number, errorMessage: string): string {

    return this.applicationUtils.message("importProduct.message.row", [itemIndex + 1, errorMessage]);
  }

  private convertToErrorMessages(): void {

    let buildErrorMessageFieldFn = ((item: Validateable, itemIndex: number, field: string) =>
        this.buildErrorMessageField(item, itemIndex, field)
    );

    this.formFlowManager.convertToErrorMessages(
      this.items, ImportProductRow.constraints, this.errorMessages, buildErrorMessageFieldFn
    );
  }

  private buildErrorMessageField(item: Validateable, itemIndex: number, field: string): string {

    let getFieldTitleFn = ((field: string) =>
        this.applicationUtils.message("importProduct.field." + field)
    );

    return this.formFlowManager.buildErrorMessageField(item, itemIndex, field, getFieldTitleFn);
  }
}
