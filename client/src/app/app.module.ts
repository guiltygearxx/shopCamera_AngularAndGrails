import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { WebHeaderComponent } from './web-template/web-header/web-header.component';
import { WebContentComponent } from './web-template/web-content/web-content.component';
import { WebFooterComponent } from './web-template/web-footer/web-footer.component';
import { DetailProductComponent } from './web-template/detail-product/detail-product.component';
import { IndexContentComponent } from './web-template/index-content/index-content.component';
import { WebLeftSideComponent } from './web-template/web-left-side/web-left-side.component';
import { ListProductsComponent } from './web-template/list-products/list-products.component';
import { CheckoutComponent } from './web-template/checkout/checkout.component';
import { AloPhoneServiceComponent } from './service/alo-phone-service/alo-phone-service.component';
import {ValidateUtils} from "./common/validate/validate-utils";
import {ComponentUtils} from "./common/component-utils";
import {ApplicationUtils} from "./common/application-utils";
import {DateFormatter} from "./common/formater/date-formatter";
import {NumberFormatter} from "./common/formater/number-formatter";
import {AppBaseModule} from "./common/app-base.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./service/product/product.service";

@NgModule({
  declarations: [
    AppComponent,
    WebHeaderComponent,
    WebContentComponent,
    WebFooterComponent,
    DetailProductComponent,
    IndexContentComponent,
    WebLeftSideComponent,
    ListProductsComponent,
    CheckoutComponent,
    AloPhoneServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBaseModule,
    HttpClientModule,
  ],
  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
    ValidateUtils,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
