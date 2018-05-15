import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Breadcrumb} from "../../bean/breadcrumb";
import {ApplicationUtils} from "../../common/application-utils";
import {Router} from "@angular/router";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  breadcrumbs: Breadcrumb[];

  @Output()
  breadcrumbSelected: EventEmitter<Breadcrumb> = new EventEmitter<Breadcrumb>();

  constructor(protected applicationUtils: ApplicationUtils,
              private router: Router,) {
  }

  ngOnInit() {
  }

  goToTrangChu(event: any): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop(() => {

      this.router.navigate(["/trangChu"]);
    });
  }

  goToBreadcrumb(event: any, breadcrumb: Breadcrumb, index: number): void {

    event.preventDefault();

    if (index == this.breadcrumbs.length - 1) return;

    this.breadcrumbSelected.emit(breadcrumb);
  }
}
