import {RestService} from "../common/rest-service";
import {Solution} from "../bean/solution";
import {HttpService} from "../common/http.service";
import {Injectable} from "@angular/core";

@Injectable()
export class SolutionService extends RestService<Solution> {

  resource: string = "solution";

  constructor(protected httpService: HttpService) {

    super(httpService);
  }
}
