import {RestService} from "../../common/rest-service";
import {News} from "../../bean/news";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class NewsService extends RestService<News>{

  resource: string = "tintuc"

  constructor(protected http: HttpClient) {

    super(http);
  }

}
