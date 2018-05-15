import {AfterContentInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebGiaiphapChitietLogic} from "./web-giaiphap-chitiet-logic";
import {SolutionService} from "../../service/solution/solution.service";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";
import {MenuItem} from "../../bean/menu-item";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";
import {Solution} from "../../bean/solution";

@Component({
  selector: 'app-web-giai-phap-chi-tiet',
  templateUrl: './web-giai-phap-chi-tiet.component.html',
  styleUrls: ['./web-giai-phap-chi-tiet.component.css']
})
export class WebGiaiPhapChiTietComponent
  extends WebGiaiphapChitietLogic implements OnInit, SupportBreadcrumbs {

  solutionId: any;

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected solutionService: SolutionService,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {

    super(solutionService);
  }

  ngOnInit() {

    this.solutionId = this.route.snapshot.paramMap.get("solutionId");

    this.getSolutionById(this.solutionId);
  }

  checkContentSolution(): boolean {

    return !isNullOrUndefined(this.solution);
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }


  protected afterGetDetailSolution(solution: Solution): void {

    super.afterGetDetailSolution(solution);

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("chiTietGiaiPhap", [solution])
  }
}
