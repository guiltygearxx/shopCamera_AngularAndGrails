import {Injectable} from "@angular/core";
import {HttpService} from "../common/http.service";
import {LoginSubmitData} from "../bean/login-submit-data";
import {Observable} from "rxjs/Observable";
import {UserInformation} from "../common/user-information";

@Injectable()
export class LoginService {

  constructor(protected httpService: HttpService) {
  }

  login(form: LoginSubmitData): Observable<UserInformation> {

    let url = "api/login";

    return this.httpService.post(url, form, null);
  }

  validate(): Observable<UserInformation> {

    let url = "api/validate";

    return this.httpService.get(url, null);
  }

  logout(): Observable<any> {

    let url = "api/logout";

    return this.httpService.post(url, null, null);
  }
}
