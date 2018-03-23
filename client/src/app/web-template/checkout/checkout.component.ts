import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GioHangService} from "../../service/order/gio-hang.service";
import {OrderDetailForm} from "../../bean/order-detail-form";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router, protected gioHangService: GioHangService) {
  }

  ngOnInit() {
  }

  getSoLuongTrongGioHang():number{

    return this.gioHangService.getOrderDetail();
  }

  thanhTienProduct(product:OrderDetailForm):number{

    let giaProduct = product.gia;
    let quantityProdut = product.quantity;
    return giaProduct*quantityProdut;
  }

  tongTienThanhToan():number{

    let tongTien: number = 0;
    this.gioHangService.detailForms.forEach((item)=> {
      let giaProduct = item.gia;
      let quantity = item.quantity;

      tongTien += giaProduct*quantity;
    });
    return tongTien;
  }

  getListGioHang(): OrderDetailForm[] {
    return this.gioHangService.detailForms;
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.router.navigate(["/trangChu"]);
  }

}
