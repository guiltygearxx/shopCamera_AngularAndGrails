import {Injectable} from "@angular/core";
import {HomeHeader} from "../web-template/index-content/home-header";
import {RestService} from "../common/rest-service";
import {HttpService} from "../common/http.service";

@Injectable()
export class HomeService extends RestService<HomeHeader>{

  resource: string = "homeHeader"

  constructor(protected http: HttpService) {

    super(http);
  }

}
