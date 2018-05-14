import {Component, OnInit} from '@angular/core';
import {WebGiaiPhapLogic} from "./web-giai-phap-logic";
import {Router} from "@angular/router";
import {Solution} from "../../bean/solution";
import {SolutionService} from "../../service/solution/solution.service";
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-web-giai-phap',
  templateUrl: './web-giai-phap.component.html',
  styleUrls: ['./web-giai-phap.component.css']
})
export class WebGiaiPhapComponent extends WebGiaiPhapLogic implements OnInit {

  constructor(private router: Router,
              protected solutionService: SolutionService,
              protected applicationUtils: ApplicationUtils) {

    super(solutionService);
  }

  ngOnInit() {
    this.getListSolution();
  }


  goToChiTietGiaiPhap(event: any, solution: Solution): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/chiTietGiaiPhap", solution.id]);
    });
  }

  goToTrangChu(event: any) {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

}
