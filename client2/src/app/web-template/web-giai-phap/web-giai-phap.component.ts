import {AfterContentInit, Component, OnInit} from '@angular/core';
import {WebGiaiPhapLogic} from "./web-giai-phap-logic";
import {Router} from "@angular/router";
import {Solution} from "../../bean/solution";
import {SolutionService} from "../../service/solution/solution.service";
import {ApplicationUtils} from "../../common/application-utils";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";
import {HomeHeader} from "../index-content/home-header";
import {HomeService} from "../../service/home.service";
import {CategoryItem} from "../../bean/category-item";
import {CategoryService} from "../../service/category/category.service";
import {ListProductService} from "../../service/list-product.service";

@Component({
  selector: 'app-web-giai-phap',
  templateUrl: './web-giai-phap.component.html',
  styleUrls: ['./web-giai-phap.component.css']
})
export class WebGiaiPhapComponent
  extends WebGiaiPhapLogic implements OnInit, SupportBreadcrumbs, AfterContentInit {

  breadcrumbs: Breadcrumb[];

  listHomeHeader: HomeHeader[];

  categoryList: CategoryItem[];

  subCategoryList: CategoryItem[];

  contentCategory: string;

  constructor(private router: Router,
              protected solutionService: SolutionService,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService,
              protected homeHeaderService: HomeService,
              protected categoryService: CategoryService,
              protected listProductService: ListProductService) {

    super(solutionService);
  }

  ngOnInit() {

    this.getListSolution();

    this.getListHomeHeader();

    this.getListCategory();

  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  ngAfterContentInit(): void {

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("giaiPhap", null);
  }

  getListHomeHeader() {

    let getMaxItem: string = '100';

    let params = {max: getMaxItem};


    this.homeHeaderService.get(params)
      .subscribe((homeHeader) => this.afterGetListHomeHeader(homeHeader));
  }

  getListCategory() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};

    this.categoryService
      .get(params)
      .subscribe((category) => this.afterGetListCategory(category));
  }

  afterGetListCategory(categoryItems: CategoryItem[]): void {

    this.categoryList = categoryItems;

    this.getSubCategory(this.categoryList);
  }

  getSubCategory(categoryList: CategoryItem[]): void{

    let subCategoryIds = categoryList
      .filter((category) => category.parentCategoryId != null);

    this.subCategoryList = subCategoryIds;

  }

  afterGetListHomeHeader(homeHeaderItems: HomeHeader[]): void {
    this.listHomeHeader = homeHeaderItems;

    if(this.listHomeHeader != null){

      let homeHeader = this.listHomeHeader.find((item) => item.flag == true && item.nameHeader == 'solution');

      this.contentCategory = homeHeader.contentHeader;

    }
  }

  goToChiTietGiaiPhap(event: any, solution: Solution): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/chiTietGiaiPhap", solution.id]);
    });
  }

  goToSubCategory(event: any, subCategory: CategoryItem): void {

    event.preventDefault();

    this.listProductService.isParamChanged = true;

    this.listProductService.selectedCategoryId = subCategory.id;

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/danhSachSanPham/", subCategory.id]);
    });
  }
}
