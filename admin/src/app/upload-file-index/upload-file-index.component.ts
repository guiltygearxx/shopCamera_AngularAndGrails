import {Component, OnInit} from '@angular/core';
import {UploadFileIndexFilterForm} from "../bean/upload-file-index-filter-form";
import {SupportPaginationTable} from "../common/support-pagination-table";
import {SupportSortingTable} from '../common/support-sorting-table';
import {UploadFile} from "../bean/upload-file";
import {UploadFileService} from "../service/upload-file.service";
import {SortableTableFlow} from "../common/sortable-table-flow";
import {Router} from "@angular/router";
import {ComponentUtils} from "../common/component-utils";
import {DialogService} from "ng2-bootstrap-modal";
import {ApplicationUtils} from '../common/application-utils';
import {FormFlowManager} from "../common/form-flow-manager";
import {PaginationParams} from "../common/pagination-params";
import {ConfirmDialogComponent} from "../common/confirm-dialog/confirm-dialog.component";
import {UploadFilePopupComponent} from "../upload-file-popup/upload-file-popup.component";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-upload-file-index',
  templateUrl: './upload-file-index.component.html',
  styleUrls: ['./upload-file-index.component.css']
})
export class UploadFileIndexComponent
  implements OnInit, SupportPaginationTable, SupportSortingTable {

  sort: string;

  order: string;

  curPageIndex: number;

  maxPageSize: number;

  count: number;

  filterForm: UploadFileIndexFilterForm;

  uploadFiles: UploadFile[];

  constructor(protected uploadFileService: UploadFileService,
              protected sortableTableFlow: SortableTableFlow,
              protected router: Router,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager) {
  }

  ngOnInit(): void {

    this.filterForm = new UploadFileIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadUploadFiles();
  }

  search(event: any): void {

    event.preventDefault();

    this.curPageIndex = 0;

    this.loadUploadFiles();
  }

  doSort(field: string) {

    this.sortableTableFlow.sort(this, field);
  }

  _goToPage(): void {

    this.loadUploadFiles();
  }

  goToPage(event: any): void {

    let pageIndex: number = event;

    this.sortableTableFlow.goToPage(this, pageIndex);
  }

  doSort_(): void {

    this.loadUploadFiles();
  }

  getSortingClass(field: string): string {

    return this.sortableTableFlow.getSortingClass(this, field);
  }

  addNew(event: any): void {

    event.preventDefault();

    this.openUploadImagePopup();
  }

  getDownloadLink(uploadFile: UploadFile): string {

    return this.uploadFileService.getDownloadLink(uploadFile);
  }

  deleteUploadFile(event: any, uploadFile: UploadFile): void {

    event.preventDefault();

    this.confirmDelete(uploadFile);
  }

  getFormattedNumber(value: string): string {

    return this.componentUtils.formatValue(value, "number");
  }

  getFormattedTime(value: number): string {

    return isNullOrUndefined(value) ? null : this.applicationUtils.formatDateTime(new Date(value));
  }

  protected loadUploadFiles(): void {

    let paginationParams = this.buildPaginationParams();

    this.uploadFileService
      .paginate(paginationParams, this.filterForm)
      .subscribe((result) => {

        this.uploadFiles = result.pageData;

        this.sortableTableFlow.afterPaginate(this, result);
      })
  }

  private buildPaginationParams(): PaginationParams {

    return this.sortableTableFlow.buildPaginationParams(this);
  }

  protected confirmDelete(uploadFile: UploadFile): void {

    this.dialogService
      .addDialog(ConfirmDialogComponent, {message: this.applicationUtils.message("default.confirmDelete")})
      .subscribe((confirm) => this.deleteUploadFile_(uploadFile));
  }

  protected deleteUploadFile_(uploadFile: UploadFile): void {

    this.uploadFileService.delete(uploadFile.id).subscribe((uploadFile) => {

      let successMessage = this.applicationUtils.message("default.success");

      this.formFlowManager.displaySuccessMessage(successMessage);

      this.loadUploadFiles();
    })
  }

  protected openUploadImagePopup(): void {

    this.dialogService
      .addDialog(UploadFilePopupComponent)
      .subscribe((url) => {

        if (!this.applicationUtils.isStringEmpty(url)) {

          this.loadUploadFiles();
        }
      });
  }
}
