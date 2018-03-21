import {AfterViewChecked, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {WebLeftSideLogic} from "./web-left-side-logic";
import {CategoryService} from "../../service/category/category.service";

declare var $: any;

@Component({
  selector: 'app-web-left-side',
  templateUrl: './web-left-side.component.html',
  styleUrls: ['./web-left-side.component.css']
})
export class WebLeftSideComponent extends WebLeftSideLogic implements OnInit, AfterViewChecked {

  private bindEffectForMenuFn: (() => void);

  constructor(private router: Router,
              protected categoryService: CategoryService) {

    super(categoryService);
  }

  ngOnInit() {

    this.getListCategory();
  }

  ngAfterViewChecked(): void {

    if (!isNullOrUndefined(this.bindEffectForMenuFn)) {

      this.bindEffectForMenuFn();

      this.bindEffectForMenuFn = null;
    }
  }

  goToCategory(event: any, category: CategoryItem): void {

    event.preventDefault();

    this.router.navigate(["/danhSachSanPham", category.code, ""]);
  }

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    this.router.navigate(["/danhSachSanPham", category.code, subCategory.code]);
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

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    super.afterGetListCategory(categoryItems);

    this.bindEffectForMenuFn = (() => this.bindEffectForMenu());
  }

  protected bindEffectForMenu(): void {

    $(".dropdown").hover(
      function () {
        $('.dropdown-menu', this).stop(true, true).slideDown("fast");
        $(this).toggleClass('open');
      },
      function () {
        $('.dropdown-menu', this).stop(true, true).slideUp("fast");
        $(this).toggleClass('open');
      }
    );
  }
}
