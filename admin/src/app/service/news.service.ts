import {RestService} from "../common/rest-service";
import {News} from "../bean/news";
import {Injectable} from "@angular/core";
import {HttpService} from "../common/http.service";

@Injectable()
export class NewsService extends RestService<News> {

  resource: string = "news";

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
