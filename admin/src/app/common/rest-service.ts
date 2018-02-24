import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

export class RestService<T> {

  resource: string;

  constructor(protected http: HttpClient) {
  }

  get(params?: any): Observable<T[]> {

    var url = environment.serviceBaseURL + this.resource;

    return this.http.get<T[]>(url, {params: params});
  }

  getById(id: any): Observable<T> {

    var url = environment.serviceBaseURL + this.resource + "/" + id.toString();

    return this.http.get<T>(url);
  }

  post(category: T): Observable<T> {

    var url = environment.serviceBaseURL + this.resource;

    return this.http.post<T>(url, category);
  }

  put(category: T): Observable<T> {

    var url = environment.serviceBaseURL + this.resource;

    return this.http.put<T>(url, category);
  }

  delete(id: any): Observable<T> {

    var url = environment.serviceBaseURL + this.resource + "/" + id.toString();

    return this.http.delete<T>(url);
  }
}
