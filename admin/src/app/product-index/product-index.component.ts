import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../service/category.service";
import {Category} from "../bean/category";
import {ProductIndexFilterForm} from "../bean/product-index-filter-form";
import {SupportPaginationTable} from "../common/support-pagination-table";
import {SupportSortingTable} from '../common/support-sorting-table';
import {ProductViewService} from '../service/product-view-service';
import {PaginationParams} from "../common/pagination-params";
import {SortableTableFlow} from '../common/sortable-table-flow';
import {ProductView} from "../bean/product-view";
import {Router} from "@angular/router";
import {ComponentUtils} from '../common/component-utils';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent
  implements OnInit, SupportPaginationTable, SupportSortingTable {

  sort: string;

  order: string;

  curPageIndex: number;

  maxPageSize: number;

  count: number;

  filterForm: ProductIndexFilterForm;

  categories: Category[];

  products: ProductView[];

  constructor(protected categoryService: CategoryService,
              protected productViewService: ProductViewService,
              protected sortableTableFlow: SortableTableFlow,
              protected router: Router,
              protected componentUtils: ComponentUtils) {
  }

  ngOnInit(): void {

    this.loadCategories();

    this.filterForm = new ProductIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadProducts();
  }

  search(event: any): void {

    event.preventDefault();

    this.curPageIndex = 0;

    this.loadProducts();
  }

  doSort(field: string) {

    this.sortableTableFlow.sort(this, field);
  }

  _goToPage(): void {

    this.loadProducts();
  }

  goToPage(event: any): void {

    let pageIndex: number = event;

    this.sortableTableFlow.goToPage(this, pageIndex);
  }

  doSort_(): void {

    this.loadProducts();
  }

  getSortingClass(field: string): string {

    return this.sortableTableFlow.getSortingClass(this, field);
  }

  addNew(event: any): void {

    event.preventDefault();

    this.router.navigate(["/starter/productDetail"]);
  }

  viewProduct(event: any, product: ProductView): void {

    event.preventDefault();

    this.router.navigate(["/starter/productDetail/" + product.id]);
  }

  getFormattedNumber(value: string): string {

    return this.componentUtils.formatValue(value, "number");
  }

  protected loadCategories(): void {

    this.categoryService.get().subscribe((categories) => this.categories = categories);
  }

  protected loadProducts(): void {

    let paginationParams = this.buildPaginationParams();

    this.productViewService
      .paginate(paginationParams, this.filterForm)
      .subscribe((result) => {

        this.products = result.pageData;

        this.sortableTableFlow.afterPaginate(this, result);
      })
  }

  private buildPaginationParams(): PaginationParams {

    return this.sortableTableFlow.buildPaginationParams(this);
  }
}
