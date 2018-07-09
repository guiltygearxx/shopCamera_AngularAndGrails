import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {GioHangService} from "../../service/order/gio-hang.service";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";

declare var stuckNav: any;
declare var $j: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[] = [

    new MenuItem("giaiPhap", "Giải pháp"),
    new MenuItem("ttsk", "Tin tức"),
    new MenuItem("lienHe", "Liên hệ")
  ]

  categoryListItem: CategoryItem[];

  constructor(protected router: Router,
              protected gioHangService: GioHangService,
              protected categoryService: CategoryService,
              protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit() {

    this.getCategorys();
  }

  ngAfterViewInit(): void {

    stuckNav();
  }

  goToSubCategoryMobile(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    $j("#cboxClose").trigger("click");

    this.goToSubCategory_(category, subCategory);
  }

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    this.goToSubCategory_(category, subCategory);
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

  goToTrangChuMobile(event: any): void {

    event.preventDefault();

    $j("#cboxClose").trigger("click");

    this.goToTrangChu_();
  }

  goToTrangChu(event: any): void {

    event.preventDefault();

    this.goToTrangChu_();
  }

  protected goToTrangChu_(): void {

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  getSoLuongTrongGioHang(): number {

    return this.gioHangService.getOrderDetail();
  }

  goToMenuIndexMobile(event: any, menuItem: MenuItem): void {

    event.preventDefault();

    $j("#cboxClose").trigger("click");

    this.goToMenuIndex_(menuItem);
  }

  goToMenuIndex(event: any, menuItem: MenuItem): void {

    event.preventDefault();

    this.goToMenuIndex_(menuItem);
  }

  protected goToMenuIndex_(menuItem: MenuItem): void {

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/" + menuItem.id]);
    });
  }

  goToOrder(event: any): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/gioHangSanPham"]);
    });
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryListItem = categoryItems;
  }

  protected getCategorys(): void {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};

    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  protected goToSubCategory_(category: CategoryItem, subCategory: CategoryItem): void {

    let selectedCategoryId = isNullOrUndefined(subCategory) ? category.id : subCategory.id;

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/danhSachSanPham/", selectedCategoryId])
    });
  }
}
