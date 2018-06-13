import {Injectable} from "@angular/core";
import {RestService} from "../common/rest-service";
import {HttpService} from "../common/http.service";
import {HomeHeader} from "../bean/home-header";
import {Observable} from "rxjs/Observable";
import {ResultBean} from "../common/result-bean";

@Injectable()
export class HomeService extends RestService<HomeHeader>{

  resource: string = "homeHeader"

  constructor(protected http: HttpService) {

    super(http);
  }
}
