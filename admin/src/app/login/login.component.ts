import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SupportSubmitForm} from "../common/support-submit-form";
import {UserInformation} from "../bean/user-information";
import {Observable} from "rxjs/Observable";
import {FormFlowManager} from "../common/form-flow-manager";
import {ValidateUtils} from "../common/validate/validate-utils";
import {LoginForm} from "../bean/login-form";
import {ApplicationService} from "../common/application.service";
import {LoginService} from "../service/login.service";
import {LoginSubmitData} from "../bean/login-submit-data";
import {RequestErrorHandler} from "../common/request-error-handler";
import {HTTP_STATUS_FORBIDDEN, STORAGE_ACCESS_TOKEN, STORAGE_USER_INFORMATION} from '../common/application-constants';
import {ApplicationUtils} from "../common/application-utils";
import {ToasterConfig} from "angular2-toaster";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";
import {StorageService} from "../common/storage.service";

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
  implements SupportSubmitForm<UserInformation>, OnInit, AfterViewInit, OnDestroy, RequestErrorHandler {

  @ViewChild("loginDiv")
  loginDiv: ElementRef;

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  form: LoginForm;

  errorMessages: string[];

  resultBean: UserInformation;

  constructor(protected formFlowManager: FormFlowManager,
              protected validateUtils: ValidateUtils,
              protected applicationService: ApplicationService,
              protected loginService: LoginService,
              protected applicationUtils: ApplicationUtils,
              protected router: Router,
              protected storageService: StorageService) {
  }

  ngOnInit(): void {

    this.form = new LoginForm();
  }

  ngAfterViewInit(): void {

    $("body").addClass("login-page");

    this.bindEnterEvent();
  }

  ngOnDestroy(): void {

    $("body").removeClass("login-page");
  }

  login(event: any): void {

    event.preventDefault();

    this.login_();
  }

  validate(): boolean {

    let isOK = this.formFlowManager.validateForm(this, this.form, LoginForm.constraints);

    if (!isOK) {

      this.errorMessages = this.form.errors.getFieldErrors().map((error) =>

        this.validateUtils.buildFieldErrorMessage(error, "login")
      );

      this.displayErrorMessage();
    }

    return isOK;
  }

  submit(): Observable<UserInformation> {

    let loginSubmitData = new LoginSubmitData();

    loginSubmitData.username = this.form.username;
    loginSubmitData.password = this.form.password;

    return this.loginService.login(loginSubmitData);
  }

  afterSubmit(result: UserInformation): void {

    this.applicationService.user = result;

    this.applicationService.accessToken = result.access_token;

    this.router.navigate(["/starter"]);
  }

  handle(error: any): void {

    switch (error.status) {

      case HTTP_STATUS_FORBIDDEN:

        this.errorMessages.push(this.applicationUtils.message("login.invalidUsernamePassword"));
        this.displayErrorMessage();
        break;

      default:
        this.formFlowManager.defaultHandleError(error);
        break;
    }
  }

  protected login_(): void {

    this.formFlowManager.submitFormForDefaultRestService(this, this);
  }

  protected bindEnterEvent(): void {

    $(this.loginDiv.nativeElement).keypress((event) => {

      if (event.keyCode == 13) {

        this.login_();

        event.preventDefault();
      }
    })
  }

  private displayErrorMessage(): void {

    if (isNullOrUndefined(this.errorMessages)) return;

    this.errorMessages.forEach((message) => this.formFlowManager.displayErrorMessage(message));
  }
}
