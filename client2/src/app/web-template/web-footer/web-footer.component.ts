import {Component, OnInit} from '@angular/core';
import {ApplicationUtils} from "../../common/application-utils";

@Component({
  selector: 'app-web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.css']
})
export class WebFooterComponent implements OnInit {

  constructor(protected applicationUtils: ApplicationUtils) {
  }

  ngOnInit() {
  }

  backToTop(event: any): void {

    event.preventDefault();

    this.applicationUtils.scrollTopTop();
  }
}
