import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {WebHeaderLogic} from "./web-header-logic";
import {WebHeaderFilterForm} from "./web-header-filter-form";
import {CategoryService} from "../../service/category/category.service";
import {ExampleObject} from "../../bean/example-object";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";

declare var $: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent extends WebHeaderLogic implements OnInit, AfterViewInit {

  menuItems: MenuItem[] = [

    new MenuItem("giaiPhap", "Giải pháp"),
    new MenuItem("ttsk", "Tin tức"),
    new MenuItem("lienHe", "Liên hệ")
  ]

  constructor(protected router: Router,
              protected listProductService: ListProductService,
              protected  gioHangService: GioHangService,
              protected categoryService: CategoryService,) {

    super(router, listProductService, gioHangService, categoryService);
  }

  ngOnInit() {

    this.filterForm = new WebHeaderFilterForm();

    this.getCategorys();

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

  ngAfterViewInit(): void {

    // var navoffeset = $(".agileits_header").offset().top;
    //
    // $(window).scroll(function () {
    //
    //   var scrollpos = $(window).scrollTop();
    //
    //   if (scrollpos >= navoffeset) {
    //
    //     $(".agileits_header").addClass("fixed");
    //
    //   } else {
    //
    //     $(".agileits_header").removeClass("fixed");
    //   }
    // });
  }

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    let selectedCategoryId = isNullOrUndefined(subCategory) ? category.id : subCategory.id;

    console.log(selectedCategoryId);

    this.router.navigate(["/danhSachSanPham/category", selectedCategoryId]);
  }

  getParentCategories(): CategoryItem[] {

    if (isNullOrUndefined(this.categoryListItem)) return null;

    let categories = this.categoryListItem.filter((category) => isNullOrUndefined(category.parentCategoryId));

    return categories;
  }

  getSubCategories(parentCategory: CategoryItem): CategoryItem[] {

    let subCategory = this.categoryListItem.filter((category) => parentCategory.id == category.parentCategoryId);

    return subCategory;
  }

  goToTrangChu(event: any): void {

    event.preventDefault();

    this.router.navigate(["/trangChu"]);
  }

  openNavForMobile(event: any): void {

    event.preventDefault();

    console.log("openNavForMobile");

    $("#mySidenav").width("250px");
  }

  closeNavForMobile(event: any): void {

    event.preventDefault();

    console.log("closeNavForMobile");

    $("#mySidenav").width("0px");
  }

}
