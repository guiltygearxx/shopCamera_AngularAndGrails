import {Component, OnInit} from '@angular/core';
import {News} from "../../bean/news";
import {NewsService} from "../../service/news/news.service";
import {Router} from "@angular/router";
import {WebTinTucSuKienLogic} from "./web-tin-tuc-su-kien-logic";
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-web-tin-tuc-su-kien',
  templateUrl: './web-tin-tuc-su-kien.component.html',
  styleUrls: ['./web-tin-tuc-su-kien.component.css']
})
export class WebTinTucSuKienComponent extends WebTinTucSuKienLogic implements OnInit {

  constructor(private router: Router,
              protected newsService: NewsService,
              protected applicationUtils: ApplicationUtils) {

    super(newsService);
  }

  ngOnInit() {

    this.getListNews();

  }

  goToChiTietTinTuc(event: any, news: News): void {

    event.preventDefault();


    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/chiTietTinTuc", news.id]);
    });
  }


  goToTrangChu(event: any) {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

}
