import {Component, OnInit} from '@angular/core';
import {BaseIndexComponent} from "../common/base-index-component";
import {SolutionIndexFilterForm} from "../bean/solution-index-filter-form";
import {Solution} from "../bean/solution";
import {SolutionService} from "../service/solution.service";
import {SortableTableFlow} from "../common/sortable-table-flow";
import {ComponentUtils} from "../common/component-utils";
import {DialogService} from "ng2-bootstrap-modal";
import {ApplicationUtils} from "../common/application-utils";
import {FormFlowManager} from "../common/form-flow-manager";
import {Router} from "@angular/router";

@Component({
  selector: 'app-solution-index',
  templateUrl: './solution-index.component.html',
  styleUrls: ['./solution-index.component.css']
})
export class SolutionIndexComponent
  extends BaseIndexComponent<SolutionIndexFilterForm, Solution, SolutionService>
  implements OnInit {

  constructor(protected domainService: SolutionService,
              protected sortableTableFlow: SortableTableFlow,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager,
              protected router: Router,) {

    super(domainService, sortableTableFlow, componentUtils, dialogService, applicationUtils, formFlowManager);
  }

  ngOnInit() {

    this.filterForm = new SolutionIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadItems();
  }

  protected addNew_(): void {

    this.router.navigate(["/starter/solutionDetail"]);
  }

  protected viewDetail_(item: Solution): void {

    this.router.navigate(["/starter/solutionDetail/" + item.id]);
  }

  getShortContent(value: string, maxLength: number): string {

    return this.applicationUtils.getShortContent(value, maxLength);
  }
}
