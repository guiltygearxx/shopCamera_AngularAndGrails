import {AfterContentInit, Component, OnInit} from '@angular/core';
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";

@Component({
  selector: 'app-web-gioi-thieu',
  templateUrl: './web-gioi-thieu.component.html',
  styleUrls: ['./web-gioi-thieu.component.css']
})
export class WebGioiThieuComponent
  implements OnInit, SupportBreadcrumbs, AfterContentInit {

  breadcrumbs: Breadcrumb[];

  constructor(protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {
  }

  ngOnInit() {
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  ngAfterContentInit(): void {

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("gioiThieu", null);
  }

}
