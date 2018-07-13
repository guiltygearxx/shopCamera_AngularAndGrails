import {Component, OnInit} from '@angular/core';
import {HomeService} from "../service/home.service";
import {HomeHeader} from "../bean/home-header";
import {HttpService} from "../common/http.service";
import {FormFlowManager} from "../common/form-flow-manager";
import {ApplicationUtils} from "../common/application-utils";
import {Router} from "@angular/router";
import {ProductView} from "../bean/product-view";
import {ConfirmDialogComponent} from "../common/confirm-dialog/confirm-dialog.component";
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'app-configuration-ui-web',
  templateUrl: './configuration-ui-web.component.html',
  styleUrls: ['./configuration-ui-web.component.css']
})
export class ConfigurationUiWebComponent implements OnInit {

  listHomeHeader: HomeHeader[];

  constructor(protected httpService: HttpService,
              protected homeHeaderService: HomeService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils,
              protected dialogService: DialogService,
              protected router: Router) {
  }

  ngOnInit() {

    this.getListHomeHeader();
  }

  getListHomeHeader() {

    let getMaxItem: string = '100';

    let params = {max: getMaxItem};


    this.homeHeaderService.get(params)
      .subscribe((homeHeader) => this.afterGetListHomeHeader(homeHeader));
  }

  afterGetListHomeHeader(homeHeaderItems: HomeHeader[]): void {

    this.listHomeHeader = homeHeaderItems;
  }

  changeHomeView(param: HomeHeader): void {

    param.flag = !param.flag;

    this.homeHeaderService.put(param, param.id).subscribe(
      (resultBean) => {

        let successMessage = this.applicationUtils.message('default.success');

        this.formFlowManager.displaySuccessMessage(successMessage);
      },

      ((error) => this.formFlowManager.defaultHandleError(error)),
    );
  }

  addNew(event: any): void {

    event.preventDefault();

    this.router.navigate(['/starter/addNewHeader']);
  }

  deleteHomeHeader(event: any, homeHeader: HomeHeader): void {

    event.preventDefault();

    this.confirmDelete(homeHeader);
  }

  protected confirmDelete(homeHeader: HomeHeader): void {

    this.dialogService
      .addDialog(ConfirmDialogComponent, {message: this.applicationUtils.message('default.confirmDelete')})
      .subscribe((confirm) => {
        if (confirm) this.deleteHeader_(homeHeader);
      });
  }

  protected deleteHeader_(homeHeader: HomeHeader): void {

    this.homeHeaderService.delete(homeHeader.id).subscribe((homeHeader) => {

      let successMessage = this.applicationUtils.message('default.success');

      this.formFlowManager.displaySuccessMessage(successMessage);

      this.getListHomeHeader();
    });
  }
}
