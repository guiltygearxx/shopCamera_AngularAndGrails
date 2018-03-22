import {Injectable} from "@angular/core";
import {ListProductInputParams} from "../bean/list-product-input-params";

@Injectable()
export class ListProductService {

  private inputParams_: ListProductInputParams;

  get inputParams(): ListProductInputParams {

    return this.inputParams_;
  }

  set inputParams(inputParams_: ListProductInputParams) {

    this.inputParams_ = inputParams_;

    this.isInputParamsChanged = true;
  }

  isInputParamsChanged: boolean;
}
