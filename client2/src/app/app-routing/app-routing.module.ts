import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexContentComponent} from "../web-template/index-content/index-content.component";
import {ListProductsComponent} from "../web-template/list-products/list-products.component";
import {DetailProductComponent} from "../web-template/detail-product/detail-product.component";
import {CheckoutComponent} from "../web-template/checkout/checkout.component";
import {WebContactComponent} from "../web-template/web-contact/web-contact.component";
import {WebGiaiPhapComponent} from "../web-template/web-giai-phap/web-giai-phap.component";
import {WebTinTucSuKienComponent} from "../web-template/web-tin-tuc-su-kien/web-tin-tuc-su-kien.component";
import {WebTinTucSuKienChiTietComponent} from "../web-template/web-tin-tuc-su-kien-chi-tiet/web-tin-tuc-su-kien-chi-tiet.component";
import {WebGiaiPhapChiTietComponent} from "../web-template/web-giai-phap-chi-tiet/web-giai-phap-chi-tiet.component";
import {WebGioiThieuComponent} from "../web-template/web-gioi-thieu/web-gioi-thieu.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'trangChu', pathMatch: 'full'},
      {path: 'trangChu', component: IndexContentComponent},
      {path: 'danhSachSanPham/category/:categoryId', component: ListProductsComponent},
      {path: 'chiTietSanPham/:productId', component: DetailProductComponent},
      {path: 'gioHangSanPham', component: CheckoutComponent},
      {path: 'lienHe', component: WebContactComponent},
      {path: 'ttsk', component: WebTinTucSuKienComponent},
      {path: 'chiTietTinTuc/:newsId', component: WebTinTucSuKienChiTietComponent},
      {path: 'giaiPhap', component: WebGiaiPhapComponent},
      {path: 'chiTietGiaiPhap/:solutionId', component: WebGiaiPhapChiTietComponent},
      {path: 'gioiThieu', component: WebGioiThieuComponent}
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
