import {Injectable} from "@angular/core";
import {ListProductInputParams} from "../bean/list-product-input-params";

@Injectable()
export class ListProductService {

  inputParams: ListProductInputParams = new ListProductInputParams();

  isInputParamsChanged: boolean;
}
