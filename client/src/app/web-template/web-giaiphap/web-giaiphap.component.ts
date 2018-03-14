import {Component, OnInit} from '@angular/core';
import {WebGiaiPhapLogic} from "./web-giai-phap-logic";
import {SolutionService} from "../../service/solution/solution.service";
import {Solution} from "../../bean/solution";
import {Router} from "@angular/router";

@Component({
  selector: 'app-web-giaiphap',
  templateUrl: './web-giaiphap.component.html',
  styleUrls: ['./web-giaiphap.component.css']
})
export class WebGiaiphapComponent extends WebGiaiPhapLogic implements OnInit {

  constructor(private router: Router,protected solutionService: SolutionService) {

    super(solutionService);
  }

  ngOnInit() {
    this.getListSolution();
  }


  goToChiTietGiaiPhap(event: any, solution: Solution): void {

    event.preventDefault();

    this.router.navigate(["/chiTietGiaiPhap", solution.id]);
  }

}
