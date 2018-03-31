import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Product} from "../../bean/product";
import {HttpService} from "../../common/http.service";

@Injectable()
export class ProductService extends RestService<Product> {

  resource: string = "product"

  constructor(protected http: HttpService) {

    super(http);
  }
}
