import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CategoryItem} from "../../bean/category-item";
import {isNullOrUndefined} from "util";
import {WebLeftSideLogic} from "./web-left-side-logic";
import {CategoryService} from "../../service/category/category.service";

@Component({
  selector: 'app-web-left-side',
  templateUrl: './web-left-side.component.html',
  styleUrls: ['./web-left-side.component.css']
})
export class WebLeftSideComponent extends WebLeftSideLogic implements OnInit {

  constructor(private router: Router,
              protected categoryService: CategoryService) {

    super(categoryService);
  }

  ngOnInit() {

    this.getListCategory();
  }


  goToCategory(event: any, category: CategoryItem): void {

    event.preventDefault();

    console.log(category.code);

    this.router.navigated = false;
    this.router.navigate(["/danhSachSanPham", category.code, ""]);
  }

  goToSubCategory(event: any, category: CategoryItem, subCategory: CategoryItem): void {

    event.preventDefault();

    this.router.navigated = false;
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
}
