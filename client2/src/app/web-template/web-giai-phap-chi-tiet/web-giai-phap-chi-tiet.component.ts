import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WebGiaiphapChitietLogic} from "./web-giaiphap-chitiet-logic";
import {SolutionService} from "../../service/solution/solution.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-web-giai-phap-chi-tiet',
  templateUrl: './web-giai-phap-chi-tiet.component.html',
  styleUrls: ['./web-giai-phap-chi-tiet.component.css']
})
export class WebGiaiPhapChiTietComponent extends WebGiaiphapChitietLogic implements OnInit {

  solutionId: any;

  constructor(protected route: ActivatedRoute, protected solutionService: SolutionService) {

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

}
