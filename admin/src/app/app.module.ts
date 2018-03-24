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
import {AppBaseModule} from './common/app-base.module';
import {FormComponent} from './examples/form/form.component';
import {DateFormatter} from './common/formater/date-formatter';
import {NumberFormatter} from './common/formater/number-formatter';
import {ApplicationUtils} from './common/application-utils';
import {ComponentUtils} from './common/component-utils';
import {ValidateUtils} from './common/validate/validate-utils';
import {CategoryService} from './service/category.service';
import {HttpClientModule} from '@angular/common/http';
import {ImportProductComponent} from './import-product/import-product.component';
import {ImportProductService} from './service/import-product.service';
import {HotTableModule} from 'ng2-handsontable';
import {ToasterModule} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductIndexComponent} from './product-index/product-index.component';
import {HttpService} from './common/http.service';
import {FormFlowManager} from './common/form-flow-manager';
import {ProductViewService} from './service/product-view-service';
import {SortableTableFlow} from './common/sortable-table-flow';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductService} from './service/product.service';
import {BootstrapModalModule} from 'ng2-bootstrap-modal';
import {UploadFilePopupComponent} from './upload-file-popup/upload-file-popup.component';
import {UploadFileService} from './service/upload-file.service';
import {UploadFileIndexComponent} from './upload-file-index/upload-file-index.component';
import {ContactIndexComponent} from './contact-index/contact-index.component';
import {ContactService} from './service/contact.service';
import {SolutionIndexComponent} from './solution-index/solution-index.component';
import {SolutionService} from './service/solution.service';
import {SolutionDetailComponent} from './solution-detail/solution-detail.component';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {NewsIndexComponent} from './news-index/news-index.component';
import {NewsService} from './service/news.service';
import {LoginComponent} from './login/login.component';
import {LoginService} from './service/login.service';
import {ApplicationService} from './common/application.service';
import {FormsModule} from '@angular/forms';
import {StorageService} from './common/storage.service';
import {LoginActivateGuard} from './common/login-activate-guard';
import {AuthActivateGuard} from './common/auth-activate-guard';
import {OrderIndexComponent} from './order-index/order-index.component';
import {OrderService} from './service/order.service';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrderDetailService} from './service/order-detail.service';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserService} from './service/user.service';
import { CategoryIndexComponent } from './category-index/category-index.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';

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
    UploadFilePopupComponent,
    UploadFileIndexComponent,
    ContactIndexComponent,
    SolutionIndexComponent,
    SolutionDetailComponent,
    NewsDetailComponent,
    NewsIndexComponent,
    LoginComponent,
    OrderIndexComponent,
    OrderDetailComponent,
    ChangePasswordComponent,
    CategoryIndexComponent,
    CategoryDetailComponent,
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
    BootstrapModalModule,
    FormsModule,
    BootstrapModalModule.forRoot({container: document.body})
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
    UploadFileService,
    ContactService,
    SolutionService,
    NewsService,
    LoginService,
    ApplicationService,
    StorageService,
    LoginActivateGuard,
    AuthActivateGuard,
    OrderService,
    OrderDetailService,
    UserService,
  ],

  bootstrap: [AppComponent],

  entryComponents: [

    UploadFilePopupComponent
  ],
})
export class AppModule {
}
