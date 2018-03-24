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
              protected sortableTableFlow: SortableTableFlow) {
  }

  ngOnInit() {

    this.form = new CategoryIndexFilterForm();

    this.loadCategories();
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

    if (isNullOrUndefined(this.items)) return;

    this.allItems.sort((item1, item2) => {

      let compareResult = this.compareItem(item1, item2, this.sort);

      return this.order == 'asc' ? compareResult : -compareResult;
    });
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

  protected loadCategories(): void {

    this.categoryService.get().subscribe(
      (items) => this.afterLoadItems(items),
      (error) => this.handle(error)
    );
  }

  protected afterLoadItems(items: Category[]): void {

    this.allItems = this.items = items;

    (this.categoryMapById = new GroupByWrapper<Category>()).groupBy(items, [(item) => item.id]);

    this.parentItems = isNullOrUndefined(items) ? null :
      items.filter((item) => this.applicationUtils.isStringEmpty((item.parentCategoryId))).sort((item1, item2) => this.compareItem(item1, item2, 'name'));
  }
}
