import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {ExampleObject} from "../../bean/example-object";
import {ApplicationUtils} from "../../common/application-utils";

declare var $: any;

declare var stuckNav: any;

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
              protected listProductService: ListProductService,
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

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    let selectedCategoryId = isNullOrUndefined(subCategory) ? category.id : subCategory.id;

    this.listProductService.isParamChanged = true;

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/danhSachSanPham/", selectedCategoryId])
    });
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

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  khoangGia: ExampleObject[];

  getSoLuongTrongGioHang(): number {

    return this.gioHangService.getOrderDetail();
  }

  goToMenuIndex(event: any, menuItem: MenuItem): void {

    event.preventDefault();

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


}
