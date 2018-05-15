import {AfterContentInit, Component, OnInit} from '@angular/core';
import {WebContactLogic} from "./web-contact-logic";
import {WebContactForm} from "./web-contact-form";
import {ContactService} from "../../service/contact/contact.service";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {FormFlowManager} from "../../common/form-flow-manager";
import {ApplicationUtils} from "../../common/application-utils";
import {Router} from "@angular/router";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";
import {Breadcrumb} from "../../bean/breadcrumb";

@Component({
  selector: 'app-web-contact',
  templateUrl: './web-contact.component.html',
  styleUrls: ['./web-contact.component.css']
})
export class WebContactComponent
  extends WebContactLogic implements OnInit, SupportBreadcrumbs, AfterContentInit {

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router,
              protected validateUtils: ValidateUtils,
              protected contactService: ContactService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {

    super(validateUtils, contactService, formFlowManager, applicationUtils);
  }

  statusRequest: any;

  ngOnInit() {

    this.errorMessages = [];

    this.form = new WebContactForm();

  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  ngAfterContentInit(): void {

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("lienHe", null);
  }
}
