import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {Product} from "../../bean/product";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService extends RestService<Product>{

  resource: string = "product"

  constructor(protected http: HttpClient) {

    super(http);
  }
}
