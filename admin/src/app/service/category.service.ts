import {Injectable} from "@angular/core";
import {RestService} from "../common/rest-service";
import {Category} from "../examples/category";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService extends RestService<Category> {

  resource: string = "category"

  constructor(protected http: HttpClient) {

    super(http);
  }
}
