import {ProductView} from "../../bean/product-view";
import {RestService} from "../../common/rest-service";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductViewService extends  RestService<ProductView>{

  resource: string = "productView"

  constructor(protected http: HttpClient) {

    super(http);
  }
}
