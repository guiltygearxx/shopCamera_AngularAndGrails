import {Component, Input, OnInit} from '@angular/core';
import {WebRightSideLogic} from "./web-right-side-logic";
import {ProductViewService} from "../../service/product/product-view.service";
import {NewsService} from "../../service/news/news.service";
import {ProductView} from "../../bean/product-view";
import {News} from "../../bean/news";
import {Router} from "@angular/router";
import {ApplicationUtils} from "../../common/application-utils";
import {NumberFormatter} from "../../common/formater/number-formatter";

@Component({
  selector: 'app-web-right-side',
  templateUrl: './web-right-side.component.html',
  styleUrls: ['./web-right-side.component.css']
})
export class WebRightSideComponent extends WebRightSideLogic implements OnInit {

  constructor(private router: Router,
              protected productViewService: ProductViewService,
              protected newsService: NewsService,
              protected applicationUtils: ApplicationUtils,
              protected numberFormater: NumberFormatter) {

    super(productViewService, newsService);
  }

  @Input()
  siteOfNews: string;

  ngOnInit() {

    this.maxSizeNews = this.siteOfNews;

    this.getListProduct();

    this.getListNews();
  }

  goToChiTietSanPham(event: any, productView: ProductView): void {

    event.preventDefault();

    this.router.navigate(["/chiTietSanPham", productView.id]);
  }

  goToChiTietTinTuc(event: any, news: News): void {

    event.preventDefault();

    this.router.navigate(["/chiTietTinTuc", news.id]);
  }


  getNumberFormatted(val: number): string {

    return this.numberFormater.format(val);
  }

}
