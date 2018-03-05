import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {CategoryItem} from "../../bean/category-item";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService extends RestService<CategoryItem> {
  resource: string = "category";

  constructor(protected http: HttpClient) {

    super(http);
  }
}
