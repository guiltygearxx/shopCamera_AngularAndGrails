import { Component, OnInit } from '@angular/core';
import {WebTintucsukienChitietLogic} from "./web-tintucsukien-chitiet-logic";
import {ActivatedRoute, Router} from "@angular/router";
import {NewsService} from "../../service/news/news.service";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-web-tin-tuc-su-kien-chi-tiet',
  templateUrl: './web-tin-tuc-su-kien-chi-tiet.component.html',
  styleUrls: ['./web-tin-tuc-su-kien-chi-tiet.component.css']
})
export class WebTinTucSuKienChiTietComponent extends WebTintucsukienChitietLogic implements OnInit {

  newsId: string;

  constructor(private router: Router,protected route: ActivatedRoute, protected newsService:NewsService,
              protected applicationUtils: ApplicationUtils) {

    super(newsService);
  }

  ngOnInit() {

    this.newsId = this.route.snapshot.paramMap.get("newsId");
    this.getNewsById(this.newsId);
  }

  checkContentNews() {
    if (isNullOrUndefined(this.newsId)) return false;
    return true;
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  goToMenuIndex(event: any, menuItem: string): void {

    event.preventDefault();

    this.goToMenuIndex_(menuItem);
  }

  protected goToMenuIndex_(menuItem: string): void {

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/" + menuItem]);
    });
  }
}
