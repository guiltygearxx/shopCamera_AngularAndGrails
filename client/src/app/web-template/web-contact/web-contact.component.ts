import { Component, OnInit } from '@angular/core';
import {WebContactLogic} from "./web-contact-logic";
import {WebContactForm} from "./web-contact-form";
import {ContactService} from "../../service/contact/contact.service";

@Component({
  selector: 'app-web-contact',
  templateUrl: './web-contact.component.html',
  styleUrls: ['./web-contact.component.css']
})
export class WebContactComponent extends WebContactLogic implements OnInit {

  constructor(protected contactService: ContactService) {
    super();
  }

  statusRequest: any;

  ngOnInit() {

    this.form = new WebContactForm();

  }

  sentRequest(){

    this.contactService.post(this.form).subscribe((status) => this.aftetSentRequest(status))
  }

  protected aftetSentRequest(statusRequest:any):void {
    this.statusRequest = statusRequest;
  }
}
