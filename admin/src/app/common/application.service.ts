import {UserInformation} from "../bean/user-information";
import {Injectable} from "@angular/core";
import {isNullOrUndefined} from "util";

@Injectable()
export class ApplicationService {

  user: UserInformation;

  get accessToken(): string {

    return isNullOrUndefined(this.user) ? null : this.user.access_token;
  }
}
