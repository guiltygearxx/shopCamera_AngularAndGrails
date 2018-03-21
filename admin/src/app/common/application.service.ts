import {UserInformation} from "../bean/user-information";
import {Injectable} from "@angular/core";
import {isNullOrUndefined} from "util";
import {StorageService} from "./storage.service";
import {STORAGE_ACCESS_TOKEN, STORAGE_USER_INFORMATION} from "./application-constants";

@Injectable()
export class ApplicationService {

  private user_: UserInformation;

  constructor(protected storageService: StorageService) {
  }

  get accessToken(): string {

    return this.storageService.getFromSessionStorage(STORAGE_ACCESS_TOKEN);
  }

  get user(): UserInformation {

    if (!isNullOrUndefined(this.user_)) return this.user_;

    let userJson = this.storageService.getFromSessionStorage(STORAGE_USER_INFORMATION);

    return isNullOrUndefined(userJson) ? null : (this.user_ = JSON.parse(userJson));
  }

  set user(user_: UserInformation) {

    this.storageService.setToSessionStorage(STORAGE_USER_INFORMATION, JSON.stringify(this.user_ = user_));
  }

  signOut(): void {

    this.storageService.setToSessionStorage(STORAGE_USER_INFORMATION, null);

    this.storageService.setToSessionStorage(STORAGE_ACCESS_TOKEN, null);
  }
}
