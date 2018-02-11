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

@NgModule({

  declarations: [
    InputTextComponent,
    TextAreaComponent,
    CheckBoxComponent,
    SelectComponent,
    DatePickerComponent
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
    DatePickerComponent
  ],

  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
  ],
})
export class AppBaseModule {
}
