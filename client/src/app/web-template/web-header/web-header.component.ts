import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";

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

  constructor(private router: Router) {
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

  goToMenuIndex(event: any, menuItem: MenuItem): void {

    event.preventDefault();

    this.router.navigate(["/" + menuItem.id]);
  }

  queryProduct(event: any): void {

    event.preventDefault();

    this.router.navigate(["/danhSachSanPham", this.searchText, ""]);
  }
}
