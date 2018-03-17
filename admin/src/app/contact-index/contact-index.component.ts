import {Component, OnInit} from '@angular/core';
import {ContactIndexFilterForm} from "../bean/contact-index-filter-form";
import {Contact} from "../bean/contact";
import {ContactService} from "../service/contact.service";
import {BaseIndexComponent} from "../common/base-index-component";
import {SimpleObject} from "../common/simple-object";
import {CONTACT_STATUS_NEW, CONTACT_STATUS_READ} from "../common/application-constants";
import {SortableTableFlow} from "../common/sortable-table-flow";
import {ComponentUtils} from "../common/component-utils";
import {ApplicationUtils} from '../common/application-utils';
import {FormFlowManager} from '../common/form-flow-manager';
import {DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.css']
})
export class ContactIndexComponent
  extends BaseIndexComponent<ContactIndexFilterForm, Contact, ContactService>
  implements OnInit {

  statusList: SimpleObject[];

  constructor(protected domainService: ContactService,
              protected sortableTableFlow: SortableTableFlow,
              protected componentUtils: ComponentUtils,
              protected dialogService: DialogService,
              protected applicationUtils: ApplicationUtils,
              protected formFlowManager: FormFlowManager) {

    super(domainService, sortableTableFlow, componentUtils, dialogService, applicationUtils, formFlowManager);
  }

  ngOnInit(): void {

    this.statusList = [CONTACT_STATUS_NEW, CONTACT_STATUS_READ].map((status) =>
      new SimpleObject(status, this.getStatusTitle(status))
    )

    this.filterForm = new ContactIndexFilterForm();

    this.curPageIndex = 0;

    this.maxPageSize = 10;

    this.loadItems();
  }

  getStatusTitle(status: string): string {

    return this.applicationUtils.message("contact.status." + status);
  }

  updateStatus(event: any, contact: Contact): void {

    let status: string = contact.status == CONTACT_STATUS_NEW ? CONTACT_STATUS_READ : CONTACT_STATUS_NEW;

    this.domainService.updateStatus(contact.id, status).subscribe((resultBean) => {

      let successMessage = this.applicationUtils.message("default.success");

      this.formFlowManager.displaySuccessMessage(successMessage);

      this.loadItems();
    })
  }

  getShortContent(value: string, maxLength: number): string {

    return this.applicationUtils.getShortContent(value, maxLength);
  }

  protected addNew_(): void {

    throw new Error("Method not supported.");
  }

  protected viewDetail_(item: Contact): void {

    throw new Error("Method not supported.");
  }
}
