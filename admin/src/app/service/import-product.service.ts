import {Injectable} from "@angular/core";
import {ImportProductRow} from "../import-product/import-product-row";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class ImportProductService {

  constructor(protected http: HttpClient) {
  }

  importProduct(file: File): Observable<ImportProductRow[]> {

    let url = environment.serviceBaseURL + "importProduct/importProduct";

    let formData: FormData = new FormData();

    formData.append("file", file, file.name);

    return this.http.post<ImportProductRow[]>(url, formData);
  }
}
