import {Injectable} from "@angular/core";
import {RestService} from "../../common/rest-service";
import {PropertiesCamera} from "../../bean/properties-camera";
import {HttpService} from "../../common/http.service";

@Injectable()
export class PropertiesCameraServiceProductService extends RestService<PropertiesCamera>{

  resource: string = "propertiesCamera"

  constructor(protected http: HttpService) {

    super(http);
  }

}
