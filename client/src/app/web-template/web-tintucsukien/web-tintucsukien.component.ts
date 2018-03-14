import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NewsService} from "../../service/news/news.service";
import {WebTinTucSuKienLogic} from "./web-tin-tuc-su-kien-logic";
import {News} from "../../bean/news";

@Component({
  selector: 'app-web-tintucsukien',
  templateUrl: './web-tintucsukien.component.html',
  styleUrls: ['./web-tintucsukien.component.css']
})
export class WebTintucsukienComponent extends WebTinTucSuKienLogic implements OnInit {

  constructor(private router: Router, protected newsService: NewsService) {
    super(newsService);
  }

  ngOnInit() {

    this.getListNews();

  }

  goToChiTietTinTuc(event: any, news: News): void {

    event.preventDefault();

    this.router.navigate(["/chiTietTinTuc", news.id]);
  }

}
