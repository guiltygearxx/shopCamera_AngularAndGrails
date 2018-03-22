import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {WebHeaderComponent} from './web-template/web-header/web-header.component';
import {WebContentComponent} from './web-template/web-content/web-content.component';
import {WebFooterComponent} from './web-template/web-footer/web-footer.component';
import {DetailProductComponent} from './web-template/detail-product/detail-product.component';
import {IndexContentComponent} from './web-template/index-content/index-content.component';
import {WebLeftSideComponent} from './web-template/web-left-side/web-left-side.component';
import {ListProductsComponent} from './web-template/list-products/list-products.component';
import {CheckoutComponent} from './web-template/checkout/checkout.component';
import {AloPhoneServiceComponent} from './service/alo-phone-service/alo-phone-service.component';
import {ValidateUtils} from "./common/validate/validate-utils";
import {ComponentUtils} from "./common/component-utils";
import {ApplicationUtils} from "./common/application-utils";
import {DateFormatter} from "./common/formater/date-formatter";
import {NumberFormatter} from "./common/formater/number-formatter";
import {AppBaseModule} from "./common/app-base.module";
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./service/product/product.service";
import {CategoryService} from "./service/category/category.service";
import {ProductViewService} from "./service/product/product-view.service";
import {WebContactComponent} from './web-template/web-contact/web-contact.component';
import {WebTrungtamdaotaoComponent} from './web-template/web-trungtamdaotao/web-trungtamdaotao.component';
import {WebDailyComponent} from './web-template/web-daily/web-daily.component';
import {WebTuyendungComponent} from './web-template/web-tuyendung/web-tuyendung.component';
import {WebGiaiphapComponent} from './web-template/web-giaiphap/web-giaiphap.component';
import {WebTintucsukienComponent} from './web-template/web-tintucsukien/web-tintucsukien.component';
import {WebGioithieuComponent} from './web-template/web-gioithieu/web-gioithieu.component';
import {SolutionService} from "./service/solution/solution.service";
import {NewsService} from "./service/news/news.service";
import {WebGiaiphapChitietComponent} from './web-template/web-giaiphap-chitiet/web-giaiphap-chitiet.component';
import {WebTintucsukienChitietComponent} from './web-template/web-tintucsukien-chitiet/web-tintucsukien-chitiet.component';
import {WebRightSideComponent} from './web-template/web-right-side/web-right-side.component';
import {FormsModule} from "@angular/forms";
import {ContactService} from "./service/contact/contact.service";
import {HttpService} from "./common/http.service";
import {FormFlowManager} from "./common/form-flow-manager";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {OrderService} from "./service/order/order.service";
import {ApplicationService} from "./common/application.service";
import {StorageService} from "./common/storage.service";
import {ListProductService} from "./service/list-product.service";
import {GioHangService} from "./service/order/gio-hang.service";

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
    WebContactComponent,
    WebTrungtamdaotaoComponent,
    WebDailyComponent,
    WebTuyendungComponent,
    WebGiaiphapComponent,
    WebTintucsukienComponent,
    WebGioithieuComponent,
    WebGiaiphapChitietComponent,
    WebTintucsukienChitietComponent,
    WebRightSideComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppBaseModule,
    HttpClientModule,
    ToasterModule
  ],
  providers: [
    DateFormatter,
    NumberFormatter,
    ApplicationUtils,
    ComponentUtils,
    ValidateUtils,
    ProductService,
    ProductViewService,
    CategoryService,
    SolutionService,
    NewsService,
    ContactService,
    OrderService,
    HttpService,
    ApplicationService,
    StorageService,
    GioHangService,
    FormFlowManager,
    ListProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
