import {AfterContentChecked, AfterContentInit, Component, OnInit} from '@angular/core';
import {WebTintucsukienChitietLogic} from "./web-tintucsukien-chitiet-logic";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../service/news/news.service";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";
import {News} from "../../bean/news";

@Component({
  selector: 'app-web-tin-tuc-su-kien-chi-tiet',
  templateUrl: './web-tin-tuc-su-kien-chi-tiet.component.html',
  styleUrls: ['./web-tin-tuc-su-kien-chi-tiet.component.css']
})
export class WebTinTucSuKienChiTietComponent
  extends WebTintucsukienChitietLogic implements OnInit, SupportBreadcrumbs, AfterContentChecked {

  newsId: string;

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected newsService: NewsService,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {

    super(newsService);
  }

  ngOnInit() {
  }

  ngAfterContentChecked(): void {

    let currentNewsId: string = this.route.snapshot.paramMap.get("newsId")

    if (this.newsId != currentNewsId) {

      this.newsId = currentNewsId;

      this.getNewsById(this.newsId);
    }
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  checkContentNews(): boolean {

    return !isNullOrUndefined(this.news);
  }


  protected afterGetDetailNews(news: News): void {

    super.afterGetDetailNews(news);

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("chiTietTinTuc", [news]);
  }
}
