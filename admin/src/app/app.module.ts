import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StarterComponent} from './starter/starter.component';
import {StarterHeaderComponent} from './starter/starter-header/starter-header.component';
import {StarterLeftSideComponent} from './starter/starter-left-side/starter-left-side.component';
import {StarterContentComponent} from './starter/starter-content/starter-content.component';
import {StarterFooterComponent} from './starter/starter-footer/starter-footer.component';
import {StarterControlSidebarComponent} from './starter/starter-control-sidebar/starter-control-sidebar.component';
import {AppBaseModule} from "./common/app-base.module";
import {FormComponent} from './examples/form/form.component';
import {DateFormatter} from "./common/formater/date-formatter";
import {NumberFormatter} from "./common/formater/number-formatter";
import {ApplicationUtils} from "./common/application-utils";
import {ComponentUtils} from "./common/component-utils";

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AppBaseModule
  ],

  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
