import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {OrderService} from "../../service/order/order.service";
import {ListProductInputParams} from "../../bean/list-product-input-params";
import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {OrderForm} from "../../bean/order-form";

declare var $: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent implements OnInit {

  menuItems: MenuItem[] = [

    new MenuItem("lienHe", "Liên hệ"),
    new MenuItem("ttdt", "Trung tâm đào tạo"),
    new MenuItem("daiLy", "Đại lý"),
    new MenuItem("tuyenDung", "Tuyển dụng"),
    new MenuItem("ttsk", "Tin tức - Sự kiện"),
    new MenuItem("giaiPhap", "Giải pháp Camera"),
    new MenuItem("gioiThieu", "Giới thiệu"),
    new MenuItem("trangChu", "Trang chủ"),
  ]

  constructor(private router: Router,
              protected listProductService: ListProductService, protected  gioHangService: GioHangService) {
  }

  @Input()
  searchText: string;

  ngOnInit() {

    $(document).ready(function () {
      var navoffeset = $(".agileits_header").offset().top;
      $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        if (scrollpos >= navoffeset) {
          $(".agileits_header").addClass("fixed");
        } else {
          $(".agileits_header").removeClass("fixed");
        }
      });

    });
  }

  getSoLuongTrongGioHang():number{

    return this.gioHangService.getOrderDetail();
  }

  goToMenuIndex(event: any, menuItem: MenuItem): void {

    event.preventDefault();

    this.router.navigate(["/" + menuItem.id]);
  }

  goToOrder(event: any): void {

    event.preventDefault();

    this.router.navigate(["/gioHangSanPham"]);
  }

  queryProduct(event: any): void {

    event.preventDefault();

    this.listProductService.isInputParamsChanged = true;

    let inputParams: ListProductInputParams = this.listProductService.inputParams = new ListProductInputParams();

    inputParams.paramsQuery = this.searchText;

    this.router.navigate(["/danhSachSanPham"]);
  }
}
