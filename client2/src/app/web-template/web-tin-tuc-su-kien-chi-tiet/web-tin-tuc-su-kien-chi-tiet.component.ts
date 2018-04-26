import { Component, OnInit } from '@angular/core';
import {WebTintucsukienChitietLogic} from "./web-tintucsukien-chitiet-logic";
import {ActivatedRoute} from "@angular/router";
import {NewsService} from "../../service/news/news.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-web-tin-tuc-su-kien-chi-tiet',
  templateUrl: './web-tin-tuc-su-kien-chi-tiet.component.html',
  styleUrls: ['./web-tin-tuc-su-kien-chi-tiet.component.css']
})
export class WebTinTucSuKienChiTietComponent extends WebTintucsukienChitietLogic implements OnInit {

  newsId: string;

  constructor(protected route: ActivatedRoute, protected newsService:NewsService) {

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

}
