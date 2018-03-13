import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {isNullOrUndefined} from "util";
import {environment} from "../../environments/environment";

@Injectable()
export class HttpService {

  constructor(protected http: HttpClient) {
  }

  private buildHttpParams(params: any, httpParams: HttpParams): HttpParams {

    if (!isNullOrUndefined(params)) {

      Object.keys(params).forEach((key) => {

        let value = params[key];

        if (isNullOrUndefined(value)) return;

        httpParams = httpParams.set(key, value);
      });
    }

    return httpParams;
  }

  get(url: string, params: any): Observable<any> {

    let httpParams = this.buildHttpParams(params, new HttpParams());

    var url = environment.serviceBaseURL + url;

    return this.http.get<any>(url, {params: httpParams, responseType: "json"});
  }

  post(url: string, body: any, params: any): Observable<any> {

    let httpParams = this.buildHttpParams(params, new HttpParams());

    var url = environment.serviceBaseURL + url;

    return this.http.post<any>(url, body, {params: httpParams});
  }

  put(url: string, body: any, params: any): Observable<any> {

    let httpParams = this.buildHttpParams(params, new HttpParams());

    var url = environment.serviceBaseURL + url;

    return this.http.put<any>(url, body, {params: httpParams});
  }

  delete(url: string, params: any): Observable<any> {

    let httpParams = this.buildHttpParams(params, new HttpParams());

    var url = environment.serviceBaseURL + url;

    return this.http.delete<any>(url, {params: httpParams});
  }
}
