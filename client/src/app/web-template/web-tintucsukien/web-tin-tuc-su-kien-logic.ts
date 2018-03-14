import {NewsService} from "../../service/news/news.service";
import {News} from "../../bean/news";

export class WebTinTucSuKienLogic{

  constructor(protected newsService:NewsService){}

  tinTuc: News[];


  getListNews() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.newsService
      .get(params)
      .subscribe((news) => this.afterGetListNews(news));
  }

  protected afterGetListNews(newsItems: News[]): void {
    this.tinTuc = newsItems;
  }

}
