import {Component, OnInit} from '@angular/core';
import {SupportSortingTable} from '../common/support-sorting-table';
import {CategoryService} from '../service/category.service';
import {CategoryIndexFilterForm} from '../bean/category-index-filter-form';
import {Category} from '../bean/category';
import {RequestErrorHandler} from '../common/request-error-handler';
import {FormFlowManager} from '../common/form-flow-manager';
import {isNullOrUndefined} from 'util';
import {ApplicationUtils} from '../common/application-utils';
import {SortableTableFlow} from '../common/sortable-table-flow';
import {GroupByWrapper} from '../common/group-by-wrapper';
import {ConfirmDialogComponent} from '../common/confirm-dialog/confirm-dialog.component';
import {DialogService} from 'ng2-bootstrap-modal';
import {News} from '../bean/news';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent
  implements OnInit, SupportSortingTable, RequestErrorHandler {

  sort: string;

  order: string;

  form: CategoryIndexFilterForm;

  allItems: Category[];

  items: Category[];

  parentItems: Category[];

  private categoryMapById: GroupByWrapper<Category>;

  constructor(protected categoryService: CategoryService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils,
              protected sortableTableFlow: SortableTableFlow,
              protected dialogService: DialogService,
              protected router: Router,) {
  }

  ngOnInit() {

    this.form = new CategoryIndexFilterForm();

    this.loadItems();
  }

  doSort(field: string): void {

    this.sortableTableFlow.sort(this, field);
  }

  search(event: any): void {

    event.preventDefault();

    this.items = isNullOrUndefined(this.allItems) ? null : this.allItems.filter((item) =>

      (this.applicationUtils.isStringEmpty(this.form.name) || (item.name.toLowerCase().indexOf(this.form.name.toLowerCase()) != -1)) &&
      (this.applicationUtils.isStringEmpty(this.form.categoryId) || (item.parentCategoryId == this.form.categoryId || item.id == this.form.categoryId))
    );
  }

  doSort_(): void {

    if (isNullOrUndefined(this.items) || this.applicationUtils.isStringEmpty(this.sort)) return;

    this.allItems.sort((item1, item2) => {

      let compareResult = this.compareItem(item1, item2, this.sort);

      return this.order == 'asc' ? compareResult : -compareResult;
    });
  }

  handle(error: any): void {

    this.formFlowManager.defaultHandleError(error);
  }

  getParentCategoryName(item: Category): string {

    let parentItem = this.getParentCategory(item);

    return isNullOrUndefined(parentItem) ? null : parentItem.name;
  }

  getParentCategory(item: Category): Category {

    if (isNullOrUndefined(item.parentCategoryId)) return null;

    return isNullOrUndefined(this.categoryMapById) ? null : this.categoryMapById.getItem([item.parentCategoryId]);
  }

  getSortingClass(field: string): string {

    return this.sortableTableFlow.getSortingClass(this, field);
  }

  delete(event: any, item: Category): void {

    event.preventDefault();

    this.confirmDelete(item);
  }

  viewDetail(event: any, item: Category): void {

    event.preventDefault();

    this.viewDetail_(item);
  }

  addNew(event: any): void {

    event.preventDefault();

    this.addNew_();
  }

  protected addNew_(): void {

    this.router.navigate(['/starter/categoryDetail/']);
  }

  protected viewDetail_(item: Category): void {

    this.router.navigate(['/starter/categoryDetail/' + item.id]);
  }

  protected confirmDelete(item: Category): void {

    this.dialogService
      .addDialog(ConfirmDialogComponent, {message: this.applicationUtils.message('default.confirmDelete')})
      .subscribe((confirm) => {

        if (confirm) this.delete_(item);
      });
  }

  protected delete_(item: Category): void {

    this.categoryService.delete(item.id).subscribe((returnItem) => {

      let successMessage = this.applicationUtils.message('default.success');

      this.formFlowManager.displaySuccessMessage(successMessage);

      this.loadItems();
    });
  }

  protected loadItems(): void {

    this.categoryService.get().subscribe(
      (items) => this.afterLoadItems(items),
      (error) => this.handle(error)
    );
  }

  protected compareItem(item1: Category, item2: Category, field: string): number {

    let compareResult;

    switch (this.sort) {

      case'parentName':
        compareResult = this.applicationUtils.compareString(this.getParentCategoryName(item1), this.getParentCategoryName(item2));
        break;

      default:
        compareResult = this.applicationUtils.compareString(item1.name, item2.name);
        break;
    }

    return compareResult;
  }

  protected afterLoadItems(items: Category[]): void {

    this.allItems = this.items = items;

    (this.categoryMapById = new GroupByWrapper<Category>()).groupBy(items, [(item) => item.id]);

    this.parentItems = isNullOrUndefined(items) ? null :
      items.filter((item) => this.applicationUtils.isStringEmpty((item.parentCategoryId))).sort((item1, item2) => this.compareItem(item1, item2, 'name'));

    this.doSort_();
  }
}
