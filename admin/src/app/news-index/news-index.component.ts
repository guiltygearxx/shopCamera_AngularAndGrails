import {Component, OnInit} from '@angular/core';
import {BaseIndexComponent} from "../common/base-index-component";
import {News} from "../bean/news";
import {NewsService} from "../service/news.service";
import {NewsIndexFilterForm} from "../bean/news-index-filter-form";
import {SortableTableFlow} from "../common/sortable-table-flow";
import {ComponentUtils} from "../common/component-utils";
import {DialogService} from "ng2-bootstrap-modal";
import {ApplicationUtils} from "../common/application-utils";
import {FormFlowManager} from "../common/form-flow-manager";
import {Router} from "@angular/router";

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.css']
})
export class NewsIndexComponent
  extends BaseIndexComponent<NewsIndexFilterForm, News, NewsService>
  implements OnInit {

  constructor(protected domainService: NewsService,
              protected sortableTableFlow: SortableTableFlow,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager,
              protected router: Router,) {

    super(domainService, sortableTableFlow, componentUtils, dialogService, applicationUtils, formFlowManager);
  }

  ngOnInit() {

    this.filterForm = new NewsIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadItems();
  }

  protected addNew_(): void {

    this.router.navigate(["/starter/newsDetail"]);
  }

  protected viewDetail_(item: News): void {

    this.router.navigate(["/starter/newsDetail/" + item.id]);
  }

  getShortContent(value: string, maxLength: number): string {

    return this.applicationUtils.getShortContent(value, maxLength);
  }
}
