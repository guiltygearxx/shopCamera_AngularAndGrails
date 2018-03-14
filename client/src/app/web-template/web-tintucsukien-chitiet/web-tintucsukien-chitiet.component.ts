import { Component, OnInit } from '@angular/core';
import {WebTintucsukienChitietLogic} from "./web-tintucsukien-chitiet-logic";
import {NewsService} from "../../service/news/news.service";
import {ActivatedRoute} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-web-tintucsukien-chitiet',
  templateUrl: './web-tintucsukien-chitiet.component.html',
  styleUrls: ['./web-tintucsukien-chitiet.component.css']
})
export class WebTintucsukienChitietComponent extends WebTintucsukienChitietLogic implements OnInit {

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
