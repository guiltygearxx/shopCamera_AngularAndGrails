import {AfterContentInit, Component, OnInit} from '@angular/core';
import {WebGiaiPhapLogic} from "./web-giai-phap-logic";
import {Router} from "@angular/router";
import {Solution} from "../../bean/solution";
import {SolutionService} from "../../service/solution/solution.service";
import {ApplicationUtils} from "../../common/application-utils";
import {SupportBreadcrumbs} from "../../common/support-breadcrumbs";
import {Breadcrumb} from "../../bean/breadcrumb";
import {BreadcrumbsUtilsService} from "../../common/breadcrumbs-utils.service";

@Component({
  selector: 'app-web-giai-phap',
  templateUrl: './web-giai-phap.component.html',
  styleUrls: ['./web-giai-phap.component.css']
})
export class WebGiaiPhapComponent
  extends WebGiaiPhapLogic implements OnInit, SupportBreadcrumbs, AfterContentInit {

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router,
              protected solutionService: SolutionService,
              protected applicationUtils: ApplicationUtils,
              protected breadcrumbsUtilsService: BreadcrumbsUtilsService) {

    super(solutionService);
  }

  ngOnInit() {

    this.getListSolution();
  }

  breadcrumbSelected(breadcrumb: Breadcrumb): void {

    this.breadcrumbsUtilsService.breadcrumbSelected(breadcrumb);
  }

  ngAfterContentInit(): void {

    this.breadcrumbs = this.breadcrumbsUtilsService.generateBreadcrumbs("giaiPhap", null);
  }

  goToChiTietGiaiPhap(event: any, solution: Solution): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/chiTietGiaiPhap", solution.id]);
    });
  }
}
