import {Injectable} from "@angular/core";
import {RestService} from "../common/rest-service";
import {Category} from "../bean/category";
import {HttpClient} from "@angular/common/http";
import {HttpService} from "../common/http.service";

@Injectable()
export class CategoryService extends RestService<Category> {

  resource: string = "category"

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
