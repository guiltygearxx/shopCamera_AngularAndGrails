import {NewsService} from "../../service/news/news.service";
import {News} from "../../bean/news";

export class WebTintucsukienChitietLogic {

  constructor(protected newsService: NewsService) {}

  news: News;

  getNewsById(newsId: string) {
    this.newsService
      .getById(newsId)
      .subscribe((news) => this.afterGetDetailNews(news));
  }

  protected afterGetDetailNews(news: News): void {
    this.news = news;
  }
}
