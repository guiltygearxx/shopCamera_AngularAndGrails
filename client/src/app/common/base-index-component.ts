import {SupportPaginationTable} from "./support-pagination-table";
import {SupportSortingTable} from "./support-sorting-table";
import {RestService} from "./rest-service";
import {SortableTableFlow} from "./sortable-table-flow";
import {ComponentUtils} from "./component-utils";
import {DialogService} from "ng2-bootstrap-modal";
import {ApplicationUtils} from "./application-utils";
import {FormFlowManager} from "./form-flow-manager";
import {PaginationParams} from "./pagination-params";
import {ConfirmDialogComponent} from "./confirm-dialog/confirm-dialog.component";
import {BaseDomain} from "./base-domain";

export abstract class BaseIndexComponent<FilterForm, Domain extends BaseDomain, DomainService extends RestService<Domain>>
  implements SupportPaginationTable, SupportSortingTable {

  sort: string;

  order: string;

  curPageIndex: number;

  maxPageSize: number;

  count: number;

  filterForm: FilterForm;

  items: Domain[];

  constructor(protected domainService: DomainService,
              protected sortableTableFlow: SortableTableFlow,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager) {
  }

  search(event: any): void {

    event.preventDefault();

    this.curPageIndex = 0;

    this.loadItems();
  }

  doSort(field: string) {

    this.sortableTableFlow.sort(this, field);
  }

  _goToPage(): void {

    this.loadItems();
  }

  goToPage(event: any): void {

    let pageIndex: number = event;

    this.sortableTableFlow.goToPage(this, pageIndex);
  }

  doSort_(): void {

    this.loadItems();
  }

  getSortingClass(field: string): string {

    return this.sortableTableFlow.getSortingClass(this, field);
  }

  addNew(event: any): void {

    event.preventDefault();

    this.addNew_();
  }

  viewDetail(event: any, item: Domain): void {

    event.preventDefault();

    this.viewDetail_(item);
  }

  delete(event: any, item: Domain): void {

    event.preventDefault();

    this.confirmDelete(item);
  }

  protected abstract addNew_(): void;

  protected abstract viewDetail_(item: Domain): void;

  protected loadItems(): void {

    let paginationParams = this.buildPaginationParams();

    this.domainService
      .paginate(paginationParams, this.filterForm)
      .subscribe((result) => {

        this.items = result.pageData;

        this.sortableTableFlow.afterPaginate(this, result);
      })
  }

  protected buildPaginationParams(): PaginationParams {

    return this.sortableTableFlow.buildPaginationParams(this);
  }

  protected confirmDelete(item: Domain): void {

    this.dialogService
      .addDialog(ConfirmDialogComponent, {message: this.applicationUtils.message("default.confirmDelete")})
      .subscribe((confirm) => {

        if (confirm) this.delete_(item);
      });
  }

  protected delete_(item: Domain): void {

    this.domainService.delete(item.id).subscribe((uploadFile) => {

      let successMessage = this.applicationUtils.message("default.success");

      this.formFlowManager.displaySuccessMessage(successMessage);

      this.loadItems();
    })
  }

  protected afterDelete_(item: Domain): void {

    let successMessage = this.applicationUtils.message("default.success");

    this.formFlowManager.displaySuccessMessage(successMessage);

    this.loadItems();
  }
}
