import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {WebContentComponent} from './web-template/web-content/web-content.component';
import {WebFooterComponent} from './web-template/web-footer/web-footer.component';
import {WebHeaderComponent} from './web-template/web-header/web-header.component';
import {IndexContentComponent} from './web-template/index-content/index-content.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {ListProductService} from "./service/list-product.service";
import {GioHangService} from "./service/order/gio-hang.service";
import {ApplicationUtils} from "./common/application-utils";
import {CategoryService} from "./service/category/category.service";
import {HttpService} from "./common/http.service";
import {ApplicationService} from "./common/application.service";
import {StorageService} from "./common/storage.service";
import {ProductViewService} from "./service/product/product-view.service";
import {NewsService} from "./service/news/news.service";
import {ListProductsComponent} from './web-template/list-products/list-products.component';
import {DetailProductComponent} from './web-template/detail-product/detail-product.component';
import {CheckoutComponent} from './web-template/checkout/checkout.component';
import {WebContactComponent} from './web-template/web-contact/web-contact.component';
import {AttributeService} from "./service/attribute.service";
import {FilterComponent} from './web-template/filter/filter.component';
import {AppBaseModule} from "./common/app-base.module";
import {FilterSliderComponent} from './web-template/filter-slider/filter-slider.component';
import {ProductService} from "./service/product/product.service";
import {OrderService} from "./service/order/order.service";
import {OrderDetailService} from "./service/order/order-detail.service";
import {FormFlowManager} from "./common/form-flow-manager";
import {ToasterModule, ToasterService} from "angular2-toaster";
import {WebGiaiPhapComponent} from './web-template/web-giai-phap/web-giai-phap.component';
import {WebTinTucSuKienComponent} from './web-template/web-tin-tuc-su-kien/web-tin-tuc-su-kien.component';
import {WebTinTucSuKienChiTietComponent} from './web-template/web-tin-tuc-su-kien-chi-tiet/web-tin-tuc-su-kien-chi-tiet.component';
import {WebGiaiPhapChiTietComponent} from './web-template/web-giai-phap-chi-tiet/web-giai-phap-chi-tiet.component';
import {WebGioiThieuComponent} from './web-template/web-gioi-thieu/web-gioi-thieu.component';
import {SolutionService} from "./service/solution/solution.service";
import {WebRightSideComponent} from './web-template/web-right-side/web-right-side.component';
import {ContactService} from "./service/contact/contact.service";
import {SortableTableFlow} from "./common/sortable-table-flow";
import {TrieuDongFormater} from "./common/trieu-dong-formater";


@NgModule({
  declarations: [
    AppComponent,
    WebContentComponent,
    WebFooterComponent,
    WebHeaderComponent,
    IndexContentComponent,
    ListProductsComponent,
    DetailProductComponent,
    CheckoutComponent,
    WebContactComponent,
    FilterComponent,
    FilterSliderComponent,
    WebGiaiPhapComponent,
    WebTinTucSuKienComponent,
    WebTinTucSuKienChiTietComponent,
    WebGiaiPhapChiTietComponent,
    WebGioiThieuComponent,
    WebRightSideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppBaseModule,
    ToasterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ListProductService,
    GioHangService,
    ApplicationUtils,
    CategoryService,
    HttpService,
    ApplicationService,
    StorageService,
    ProductViewService,
    NewsService,
    AttributeService,
    ProductService,
    OrderService,
    OrderDetailService,
    FormFlowManager,
    ToasterService,
    SolutionService,
    ContactService,
    SortableTableFlow,
    TrieuDongFormater,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
