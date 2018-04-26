import { Component, OnInit } from '@angular/core';
import {WebContactLogic} from "./web-contact-logic";
import {WebContactForm} from "./web-contact-form";
import {ContactService} from "../../service/contact/contact.service";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {FormFlowManager} from "../../common/form-flow-manager";
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-web-contact',
  templateUrl: './web-contact.component.html',
  styleUrls: ['./web-contact.component.css']
})
export class WebContactComponent extends WebContactLogic implements OnInit {

  constructor(protected validateUtils: ValidateUtils,
              protected contactService: ContactService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
    super(validateUtils,contactService,formFlowManager,applicationUtils);
  }

  statusRequest: any;

  ngOnInit() {

    this.errorMessages = [];

    this.form = new WebContactForm();

  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  // sentRequest(){
  //
  //
  //   this.contactService.post(this.form).subscribe((status) => this.aftetSentRequest(status))
  // }

  // protected aftetSentRequest(statusRequest:any):void {
  //   this.statusRequest = statusRequest;
  // }
}
