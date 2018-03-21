import {Component, OnInit} from '@angular/core';
import {SolutionDetailLogic} from "./solution-detail-logic";
import {ValidateUtils} from "../common/validate/validate-utils";
import {SolutionService} from "../service/solution.service";
import {FormFlowManager} from "../common/form-flow-manager";
import {ApplicationUtils} from "../common/application-utils";
import {ActivatedRoute} from "@angular/router";
import {SolutionDetailForm} from "../bean/solution-detail-form";
import {UploadFilePopupComponent} from "../upload-file-popup/upload-file-popup.component";
import {DialogService} from "ng2-bootstrap-modal";
import {Solution} from "../bean/solution";

@Component({
  selector: 'app-solution-detail',
  templateUrl: './solution-detail.component.html',
  styleUrls: ['./solution-detail.component.css']
})
export class SolutionDetailComponent
  extends SolutionDetailLogic
  implements OnInit {

  constructor(protected validateUtils: ValidateUtils,
              protected solutionService: SolutionService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils,
              protected route: ActivatedRoute,
              protected dialogService: DialogService) {

    super(solutionService, formFlowManager, applicationUtils);
  }

  ngOnInit() {

    this.form = new SolutionDetailForm();

    this.form.id = this.route.snapshot.paramMap.get('id');

    if (!this.applicationUtils.isStringEmpty(this.form.id)) this.initForEdit();
  }

  save(event: any): void {

    event.preventDefault();

    this.formFlowManager.submitFormForDefaultRestService(this);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  inputIconClick(event: any): void {

    event.preventDefault();

    this.openUploadImagePopup();
  }

  afterSubmit(result: Solution): void {

    super.afterSubmit(result);

    this.initForEdit_(result);
  }

  protected openUploadImagePopup(): void {

    this.dialogService
      .addDialog(UploadFilePopupComponent)
      .subscribe((url) => {

        if (!this.applicationUtils.isStringEmpty(url)) this.form.hinhAnh = url;
      });
  }

  protected initForEdit(): void {

    this.solutionService.getById(this.form.id).subscribe((solution) => {

      this.initForEdit_(solution);
    });
  }

  protected initForEdit_(solution: Solution): void {

    this.form.id = solution.id;
    this.form.tieuDe = solution.tieuDe;
    this.form.hinhAnh = solution.hinhAnh;
    this.form.noiDungNgan = solution.noiDungNgan;
    this.form.noiDungChiTiet = solution.noiDungChiTiet;
  }
}
