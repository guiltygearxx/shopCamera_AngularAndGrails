import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {WebContactForm} from "../../web-template/web-contact/web-contact-form";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContactService extends RestService<WebContactForm> {
  resource: string = "contact";

  constructor(protected http: HttpClient) {

    super(http);
  }
}
