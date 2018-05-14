import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebGiaiphapChitietLogic} from "./web-giaiphap-chitiet-logic";
import {SolutionService} from "../../service/solution/solution.service";
import {isNullOrUndefined} from "util";
import {ApplicationUtils} from "../../common/application-utils";
import {MenuItem} from "../../bean/menu-item";

@Component({
  selector: 'app-web-giai-phap-chi-tiet',
  templateUrl: './web-giai-phap-chi-tiet.component.html',
  styleUrls: ['./web-giai-phap-chi-tiet.component.css']
})
export class WebGiaiPhapChiTietComponent extends WebGiaiphapChitietLogic implements OnInit {

  solutionId: any;

  constructor(private router: Router,
              protected route: ActivatedRoute,
              protected solutionService: SolutionService,
              protected applicationUtils: ApplicationUtils) {

    super(solutionService);
  }

  ngOnInit() {

    this.solutionId = this.route.snapshot.paramMap.get("solutionId");
    this.getSolutionById(this.solutionId);
  }

  checkContentSolution() {
    if (isNullOrUndefined(this.solution)) return false;
    return true;
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  goToMenuIndex(event: any, menuItem: string): void {

    event.preventDefault();

    this.goToMenuIndex_(menuItem);
  }

  protected goToMenuIndex_(menuItem: string): void {

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/" + menuItem]);
    });
  }

}
