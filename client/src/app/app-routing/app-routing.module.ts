import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from "../app.component";
import {ListProductsComponent} from "../web-template/list-products/list-products.component";
import {DetailProductComponent} from "../web-template/detail-product/detail-product.component";
import {CheckoutComponent} from "../web-template/checkout/checkout.component";
import {IndexContentComponent} from "../web-template/index-content/index-content.component";
import {WebContactComponent} from "../web-template/web-contact/web-contact.component";
import {WebTrungtamdaotaoComponent} from "../web-template/web-trungtamdaotao/web-trungtamdaotao.component";
import {WebDailyComponent} from "../web-template/web-daily/web-daily.component";
import {WebTuyendungComponent} from "../web-template/web-tuyendung/web-tuyendung.component";
import {WebGiaiphapComponent} from "../web-template/web-giaiphap/web-giaiphap.component";
import {WebTintucsukienComponent} from "../web-template/web-tintucsukien/web-tintucsukien.component";
import {WebGioithieuComponent} from "../web-template/web-gioithieu/web-gioithieu.component";
import {WebGiaiphapChitietComponent} from "../web-template/web-giaiphap-chitiet/web-giaiphap-chitiet.component";
import {WebTintucsukienChitietComponent} from "../web-template/web-tintucsukien-chitiet/web-tintucsukien-chitiet.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'trangChu', pathMatch: 'full'},
      {path: 'trangChu', component: IndexContentComponent},
      {path: 'danhSachSanPham/:categoryCode/:subCategory', component: ListProductsComponent},
      {path: 'danhSachSanPham/:paramsQuery', component: ListProductsComponent},
      {path: 'chiTietSanPham/:productId', component: DetailProductComponent},
      {path: 'gioHangSanPham', component: CheckoutComponent},
      {path: 'lienHe', component: WebContactComponent},
      {path: 'ttdt', component: WebTrungtamdaotaoComponent},
      {path: 'daiLy', component: WebDailyComponent},
      {path: 'tuyenDung', component: WebTuyendungComponent},
      {path: 'ttsk', component: WebTintucsukienComponent},
      {path: 'chiTietTinTuc/:newsId', component: WebTintucsukienChitietComponent},
      {path: 'giaiPhap', component: WebGiaiphapComponent},
      {path: 'chiTietGiaiPhap/:solutionId', component: WebGiaiphapChitietComponent},
      {path: 'gioiThieu', component: WebGioithieuComponent}
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
