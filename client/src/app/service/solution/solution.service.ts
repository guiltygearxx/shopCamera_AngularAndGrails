import {RestService} from "../../common/rest-service";
import {Solution} from "../../bean/solution";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SolutionService extends RestService<Solution>{

  resource: string = "giaiPhap"

  constructor(protected http: HttpClient) {

    super(http);
  }

}
