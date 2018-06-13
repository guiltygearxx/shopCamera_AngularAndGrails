import { Component } from '@angular/core';
import {DefaultDetailComponent} from "../../common/default-detail-component";
import {AddNewHeaderForm} from "./add-new-header-form";
import {HomeHeader} from "../../bean/home-header";
import {ApplicationUtils} from "../../common/application-utils";
import {ActivatedRoute} from "@angular/router";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {FormFlowManager} from "../../common/form-flow-manager";
import {HomeService} from "../../service/home.service";
import {SimpleObject} from "../../common/simple-object";

@Component({
  selector: 'app-add-new-header',
  templateUrl: './add-new-header.component.html',
  styleUrls: ['./add-new-header.component.css']
})
export class AddNewHeaderComponent extends DefaultDetailComponent<AddNewHeaderForm, HomeHeader> {

  templateTypeOptions: SimpleObject[];


  constructor(protected applicationUtils: ApplicationUtils,
              protected domainRestService: HomeService,
              protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected route: ActivatedRoute,) {

    super(applicationUtils, domainRestService, formFlowManager, validateUtils, route);
  }

  ngOnInit(): void {

    this.form = new AddNewHeaderForm();

    this.templateTypeOptions = [{id: "home", name:"Tiêu đề trang chủ"},{id: "solution", name:"Tiêu đề giải pháp"} ];

    super.ngOnInit();
  }

  save(event: any): void {

    event.preventDefault();

    console.log("vao day ????");
  }

  protected bindDataToForm(object: HomeHeader): AddNewHeaderForm {

    this.id = object.id;

    let form = new AddNewHeaderForm();

    form.nameHeader = object.nameHeader;
    form.contentHeader = object.contentHeader;
    form.flag = object.flag;

    return form;
  }

  protected convertToBaseDomain(): HomeHeader {
    let homeHeader = new HomeHeader();

    homeHeader.nameHeader = this.form.nameHeader;
    homeHeader.contentHeader = this.form.contentHeader;
    homeHeader.flag = this.form.flag;

    return homeHeader;
  }

  protected getDetailFormConstraints(): any {

    return AddNewHeaderForm.constraints;
  }

  protected initForCreate(): AddNewHeaderForm {
    return new AddNewHeaderForm();
  }

}
