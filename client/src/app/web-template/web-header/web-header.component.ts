import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {WebHeaderLogic} from "./web-header-logic";
import {WebHeaderFilterForm} from "./web-header-filter-form";
import {CategoryService} from "../../service/category/category.service";
import {ExampleObject} from "../../bean/example-object";

declare var $: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent extends WebHeaderLogic implements OnInit {

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

  constructor(protected router: Router,
              protected listProductService: ListProductService,
              protected  gioHangService: GioHangService,
              protected categoryService: CategoryService) {
    super(router, listProductService, gioHangService, categoryService);
  }

  ngOnInit() {

    this.filterForm = new WebHeaderFilterForm();

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

    this.loadCategories();

    this.khoangGia = [
      new ExampleObject("1000000", "> 1 triệu"),
      new ExampleObject("2000000", "> 2 triệu"),
      new ExampleObject("3000000", "> 3 triệu"),
      new ExampleObject("4000000", "> 4 triệu"),
      new ExampleObject("5000000", "> 5 triệu"),
      new ExampleObject("6000000", "> 6 triệu"),
      new ExampleObject("7000000", "> 7 triệu"),
      new ExampleObject("8000000", "> 8 triệu"),
      new ExampleObject("9000000", "> 9 triệu"),
    ]
  }
}
