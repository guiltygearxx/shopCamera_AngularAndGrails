import {RestService} from "../common/rest-service";
import {Contact} from "../bean/contact";
import {HttpService} from "../common/http.service";
import {UpdateContactStatusForm} from "../bean/update-contact-status-form";
import {Observable} from "rxjs/Observable";
import {ResultBean} from "../common/result-bean";
import {Injectable} from "@angular/core";

@Injectable()
export class ContactService extends RestService<Contact> {

  resource: string = "contact";

  constructor(httpService: HttpService) {

    super(httpService);
  }

  updateStatus(id: string, status: string): Observable<ResultBean> {

    let form = new UpdateContactStatusForm();

    form.status = status;
    form.id = id;

    return this.httpService.post(this.resource + "/updateStatus", form, null);
  }
}
