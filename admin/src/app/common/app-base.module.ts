import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {InputTextComponent} from "./input-text/input-text.component";
import {TextAreaComponent} from "./text-area/text-area.component";
import {DateFormatter} from "./formater/date-formatter";
import {NumberFormatter} from "./formater/number-formatter";
import {ApplicationUtils} from "./application-utils";
import {ComponentUtils} from "./component-utils";
import {BrowserModule} from "@angular/platform-browser";
import {CheckBoxComponent} from './check-box/check-box.component';
import {SelectComponent} from './select/select.component';
import {DatePickerComponent} from './date-picker/date-picker.component';
import {ValidateUtils} from "./validate/validate-utils";
import {InputFileComponent} from './input-file/input-file.component';
import {BoxErrorsComponent} from './box-errors/box-errors.component';

@NgModule({

  declarations: [
    InputTextComponent,
    TextAreaComponent,
    CheckBoxComponent,
    SelectComponent,
    DatePickerComponent,
    InputFileComponent,
    BoxErrorsComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
  ],

  exports: [
    InputTextComponent,
    TextAreaComponent,
    CheckBoxComponent,
    SelectComponent,
    DatePickerComponent,
    InputFileComponent,
    BoxErrorsComponent
  ],

  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
    ValidateUtils
  ],
})
export class AppBaseModule {
}
