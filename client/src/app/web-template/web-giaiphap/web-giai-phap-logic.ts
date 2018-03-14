import {SolutionService} from "../../service/solution/solution.service";
import {Solution} from "../../bean/solution";

export class WebGiaiPhapLogic{

  constructor(protected solutionService: SolutionService) {
  }

  solutionList: Solution[];

  getListSolution() {

    let getMaxItem: string = '30';

    let params = {max: getMaxItem};


    this.solutionService
      .get(params)
      .subscribe((solution) => this.afterGetListSolution(solution));
  }

  afterGetListSolution(solutionItems: Solution[]): void {
    this.solutionList = solutionItems;
  }
}
