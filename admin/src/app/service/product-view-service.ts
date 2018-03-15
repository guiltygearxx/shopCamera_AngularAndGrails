import {RestService} from "../common/rest-service";
import {ProductView} from "../bean/product-view";
import {HttpService} from "../common/http.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductViewService extends RestService<ProductView> {

  resource: string = "productView";

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
