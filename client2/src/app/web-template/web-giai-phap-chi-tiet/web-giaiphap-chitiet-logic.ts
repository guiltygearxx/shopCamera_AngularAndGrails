import {Solution} from "../../bean/solution";
import {SolutionService} from "../../service/solution/solution.service";

export class WebGiaiphapChitietLogic {
  constructor(protected solutionService:SolutionService) {}

  solution: Solution;

  getSolutionById(solutionId: string){
    this.solutionService
      .getById(solutionId)
      .subscribe((solution) => this.afterGetDetailSolution(solution));
  }

  protected afterGetDetailSolution(solution:Solution):void {
    this.solution = solution;
  }

}
