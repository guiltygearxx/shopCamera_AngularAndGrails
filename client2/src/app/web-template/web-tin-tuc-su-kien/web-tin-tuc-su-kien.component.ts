import {AfterContentInit, Component, OnInit} from '@angular/core';
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";
import {Router} from "@angular/router";
import {WebTinTucSuKienLogic} from "./web-tin-tuc-su-kien-logic";
import {ApplicationUtils} from "../../common/application-utils";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";

@Component({
  selector: 'app-web-tin-tuc-su-kien',
  templateUrl: './web-tin-tuc-su-kien.component.html',
  styleUrls: ['./web-tin-tuc-su-kien.component.css']
})
export class WebTinTucSuKienComponent
  extends WebTinTucSuKienLogic implements OnInit, SupportBreadcrumbs, AfterContentInit {

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router,
              protected newsService: NewsService,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {

    super(newsService);
  }

  ngOnInit() {

    this.getListNews();
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  ngAfterContentInit(): void {

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("ttsk", null);
  }

  goToChiTietTinTuc(event: any, news: News): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/chiTietTinTuc", news.id]);
    });
  }
}
