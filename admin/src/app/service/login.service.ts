import {Injectable} from "@angular/core";
import {HttpService} from "../common/http.service";
import {LoginSubmitData} from "../bean/login-submit-data";
import {Observable} from "rxjs/Observable";
import {UserInformation} from "../bean/user-information";

@Injectable()
export class LoginService {

  constructor(protected httpService: HttpService) {
  }

  login(form: LoginSubmitData): Observable<UserInformation> {

    let url = "api/login";

    return this.httpService.post(url, form, null);
  }
}
