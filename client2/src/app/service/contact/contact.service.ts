import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {WebContactForm} from "../../web-template/web-contact/web-contact-form";
import {HttpService} from "../../common/http.service";
import {Contact} from "../../web-template/web-contact/contact";

@Injectable()
export class ContactService extends RestService<Contact> {

  resource: string = "contact";

  constructor(protected http: HttpService) {

    super(http);
  }
}
