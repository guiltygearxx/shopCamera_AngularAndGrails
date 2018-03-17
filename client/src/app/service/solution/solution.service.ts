import {RestService} from "../../common/rest-service";
import {Solution} from "../../bean/solution";
import {Injectable} from "@angular/core";
import {HttpService} from "../../common/http.service";

@Injectable()
export class SolutionService extends RestService<Solution>{

  resource: string = "giaiPhap"

  constructor(protected http: HttpService) {

    super(http);
  }

}
