import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from "../app.component";
import {ListProductsComponent} from "../web-template/list-products/list-products.component";
import {DetailProductComponent} from "../web-template/detail-product/detail-product.component";
import {CheckoutComponent} from "../web-template/checkout/checkout.component";
import {IndexContentComponent} from "../web-template/index-content/index-content.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'trangChu', pathMatch: 'full'},
      {path: 'trangChu', component: IndexContentComponent},
      {path: 'danhSachSanPham/:categoryCode/:subCategory', component: ListProductsComponent},
      {path: 'chiTietSanPham/:productId', component: DetailProductComponent},
      {path: 'gioHangSanPham', component: CheckoutComponent}
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
