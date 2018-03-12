import {ResultBean} from "./result-bean";
import {Observable} from "rxjs/Observable";

export interface SupportSubmitForm {

  errorMessages: string[];

  resultBean: ResultBean;

  validate(): boolean;

  submit(): Observable<ResultBean>;

  afterSubmit(resultBean: ResultBean): void;
}
