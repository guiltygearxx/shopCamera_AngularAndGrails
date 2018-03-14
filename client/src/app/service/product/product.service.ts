import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../../bean/product";

@Injectable()
export class ProductService extends RestService<Product>{

  resource: string = "product"

  constructor(protected http: HttpClient) {

    super(http);
  }

}
