import {SupportSubmitForm} from "../common/support-submit-form";
import {Solution} from "../bean/solution";
import {Observable} from "rxjs/Observable";
import {SolutionDetailForm} from "../bean/solution-detail-form";
import {FormFlowManager} from "../common/form-flow-manager";
import {ApplicationUtils} from "../common/application-utils";
import {SolutionService} from "../service/solution.service";

export class SolutionDetailLogic implements SupportSubmitForm<Solution> {

  form: SolutionDetailForm;

  errorMessages: string[];

  resultBean: Solution;

  constructor(protected solutionService: SolutionService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
  }

  validate(): boolean {

    return this.validateForm();
  }

  submit(): Observable<Solution> {

    return this.applicationUtils.isStringEmpty(this.form.id) ?
      this.solutionService.post(this.convertToSolution()) :
      this.solutionService.put(this.convertToSolution(), this.form.id);
  }

  afterSubmit(result: Solution): void {

    this.formFlowManager.processResultBeanForDefaultRestService(this, result);

    this.form.id = result.id;
  }

  protected convertToSolution(): Solution {

    let solution = new Solution();

    solution.id = this.form.id;
    solution.tieuDe = this.form.tieuDe;
    solution.hinhAnh = this.form.hinhAnh;
    solution.noiDungNgan = this.form.noiDungNgan;
    solution.noiDungChiTiet = this.form.noiDungChiTiet;

    return solution;
  }

  protected validateForm(): boolean {

    return this.formFlowManager.validateForm(this, this.form, SolutionDetailForm.constraints);
  }
}
