import {ProductViewService} from "../../service/product/product-view.service";
import {NewsService} from "../../service/news/news.service";
import {ProductView} from "../../bean/product-view";
import {News} from "../../bean/news";
import {isNullOrUndefined} from "util";

export class WebRightSideLogic {
  constructor(protected productViewService: ProductViewService, protected newsService: NewsService) {
  }

  productList: ProductView[];

  maxSizeNews:string;

  tintuc: News[]

  getListProduct() {

    let params = {order: 'desc', max: 7};

    this.productViewService
      .get(params)
      .subscribe((product) => this.afterGetListProduct(product));
  }

  getListNews() {

    let getMaxItem: string = '10';

    if(!isNullOrUndefined(this.maxSizeNews)){
      getMaxItem = this.maxSizeNews;
    }

    let params = {max: getMaxItem};


    this.newsService
      .get(params)
      .subscribe((news) => this.afterGetListNews(news));
  }

  protected afterGetListNews(newsItems: News[]): void {
    this.tintuc = newsItems;
  }

  protected afterGetListProduct(productViews: ProductView[]): void {

    this.productList = productViews;
  }

}
