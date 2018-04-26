import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {CategoryItem} from "../../bean/category-item";
import {HttpService} from "../../common/http.service";

@Injectable()
export class CategoryService extends RestService<CategoryItem> {
  resource: string = "category";

  constructor(protected http: HttpService) {

    super(http);
  }
}
