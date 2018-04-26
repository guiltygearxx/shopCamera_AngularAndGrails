import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "../../bean/menu-item";
import {ListProductService} from "../../service/list-product.service";
import {GioHangService} from "../../service/order/gio-hang.service";
import {WebHeaderLogic} from "./web-header-logic";
import {WebHeaderFilterForm} from "./web-header-filter-form";
import {CategoryService} from "../../service/category/category.service";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";

declare var $: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent extends WebHeaderLogic implements OnInit {

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
}
