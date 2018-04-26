import {ProductView} from "../../bean/product-view";
import {RestService} from "../../common/rest-service";
import {Injectable} from "@angular/core";
import {HttpService} from "../../common/http.service";

@Injectable()
export class ProductViewService extends RestService<ProductView> {

  resource: string = "productView"

  constructor(protected http: HttpService) {

    super(http);
  }
}
