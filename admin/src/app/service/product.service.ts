import {Injectable} from "@angular/core";
import {RestService} from "../common/rest-service";
import {Product} from "../bean/product";
import {HttpClient} from "@angular/common/http";
import {ProductForm} from "../bean/product-form";
import {Observable} from "rxjs/Observable";
import {ResultBean} from "../common/result-bean";
import {environment} from "../../environments/environment";
import {HttpService} from "../common/http.service";

@Injectable()
export class ProductService extends RestService<Product> {

  resource: string = "product";

  constructor(protected httpService: HttpService) {

    super(httpService);
  }

  updateProduct(form: ProductForm): Observable<ResultBean> {

    return this.httpService.post(this.resource + "/updateProduct", form, null);
  }
}
