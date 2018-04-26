import {WebContactForm} from "./web-contact-form";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {ContactService} from "../../service/contact/contact.service";
import {FormFlowManager} from "../../common/form-flow-manager";
import {ApplicationUtils} from "../../common/application-utils";
import {Contact} from "./contact";

export class WebContactLogic {

  form: WebContactForm;

  errorMessages: string[];

  constructor(protected validateUtils: ValidateUtils,
              protected contactService: ContactService,
              protected formFlowManager: FormFlowManager,
              protected applicationUtils: ApplicationUtils) {
  }

  submit(): void {

    if (!this.validateForm()) return;

    this.contactService.post(this.convertToDomain()).subscribe((contact) => {

      this.afterSubmit(contact);
    })
  }

  afterSubmit(contact: Contact): void {

    let form = this;

    let successMessage = this.applicationUtils.message("add.success.contact");

    this.formFlowManager.displaySuccessMessage(successMessage);
  }

  private convertToDomain(): Contact {

    let contact = new Contact();

    contact.name = this.form.name;
    contact.email = this.form.email;
    contact.phone = this.form.phone;
    contact.address = this.form.address;
    contact.comment = this.form.comment;

    return contact;
  }

  private validateForm(): boolean {

    let validateResult = this.validateUtils.validate(this.form, WebContactForm.constraints);

    if (!validateResult) {

      this.errorMessages.push(this.applicationUtils.message("default.form.error"));
    }

    return validateResult;
  }

}
