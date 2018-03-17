import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {ApplicationUtils} from "../application-utils";
import {SupportOnChangesComponentModal} from "../support-on-changes-component-modal";
import {OnChangeCallBack} from "../on-change-call-back";
import {ComponentUtils} from "../component-utils";

@Component({
  selector: 'app-pagination-footer',
  templateUrl: './pagination-footer.component.html',
  styleUrls: ['./pagination-footer.component.css']
})
export class PaginationFooterComponent
  implements OnInit, OnChanges, AfterContentChecked, SupportOnChangesComponentModal {

  contentChangedAttrs: string[];

  viewChangedAttrs: string[];

  afterContentCheckCallbacks: OnChangeCallBack[];

  afterViewCheckCallbacks: OnChangeCallBack[];

  @Input()
  dataSize: number = 0;

  @Input()
  pageIndex: number;

  @Input()
  maxPageSize: number;

  startIndex: number;
  endIndex: number;
  pageCount: number;

  private calculateVarsFn: (() => void);

  @Output()
  goToPage: EventEmitter<number> = new EventEmitter<number>();

  constructor(protected applicationUtils: ApplicationUtils,
              protected componentUtils: ComponentUtils) {
  }

  ngOnInit() {

    this.afterContentCheckCallbacks = [

      new OnChangeCallBack(["dataSize"], (() => this.calculateVars())),
      new OnChangeCallBack(["pageIndex"], (() => this.calculateVars())),
      new OnChangeCallBack(["maxPageSize"], (() => this.calculateVars())),
    ];
  }

  ngOnChanges(changes: SimpleChanges): void {

    this.componentUtils.storedChangedAttrs(changes, this);
  }

  ngAfterContentChecked(): void {

    this.componentUtils.runAfterContentCheckedCallback(this);
  }

  goFirstPage(event: any) {

    event.preventDefault();

    this.goToPage.emit(0);
  }

  goLastPage(event: any) {

    event.preventDefault();

    this.goToPage.emit(this.pageCount - 1);
  }

  goPreviousPage(event: any) {

    event.preventDefault();

    this.goToPage.emit(this.pageIndex - 1);
  }

  goNextPage(event: any) {

    event.preventDefault();

    this.goToPage.emit(this.pageIndex + 1);
  }

  protected calculateVars(): void {

    this.pageCount = Math.floor((this.dataSize - 1) / this.maxPageSize + 1);

    this.startIndex = this.pageIndex * this.maxPageSize;

    this.endIndex = (this.pageIndex + 1) * this.maxPageSize - 1;

    if (this.endIndex > this.dataSize - 1) this.endIndex = this.dataSize - 1;
  }
}
