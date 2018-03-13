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
import {ValidateUtils} from "./common/validate/validate-utils";
import {CategoryService} from "./service/category.service";
import {HttpClientModule} from "@angular/common/http";
import {ImportProductComponent} from './import-product/import-product.component';
import {ImportProductService} from "./service/import-product.service";
import {HotTableModule} from "ng2-handsontable";
import {ToasterModule} from "angular2-toaster";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProductIndexComponent} from './product-index/product-index.component';
import {HttpService} from "./common/http.service";
import {FormFlowManager} from "./common/form-flow-manager";
import {ProductViewService} from "./service/product-view-service";
import {SortableTableFlow} from "./common/sortable-table-flow";
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductService} from './service/product.service';

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
    ImportProductComponent,
    ProductIndexComponent,
    ProductDetailComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AppBaseModule,
    HttpClientModule,
    HotTableModule,
    ToasterModule,
    BrowserAnimationsModule,
  ],

  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
    ValidateUtils,
    CategoryService,
    ImportProductService,
    HttpService,
    FormFlowManager,
    ProductViewService,
    SortableTableFlow,
    ProductService,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
