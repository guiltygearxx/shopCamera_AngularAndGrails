import {Injectable} from "@angular/core";
import {ImportProductRow} from "../bean/import-product-row";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";
import {ImportProductsForm} from "../bean/import-products-form";
import {ResultBean} from "../common/result-bean";

@Injectable()
export class ImportProductService {

  constructor(protected http: HttpClient) {
  }

  parseFile(file: File): Observable<ImportProductRow[]> {

    let url = environment.serviceBaseURL + "importProduct/parseFile";

    let formData: FormData = new FormData();

    formData.append("file", file, file.name);

    return this.http.post<ImportProductRow[]>(url, formData);
  }

  importProducts(form: ImportProductsForm): Observable<ResultBean> {

    let url = environment.serviceBaseURL + "importProduct/importProducts";

    return this.http.post<ResultBean>(url, form);
  }
}
