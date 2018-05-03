import {AfterViewInit, Component} from '@angular/core';
import {ToasterConfig} from "angular2-toaster";

declare var $: any;

declare var backToTop: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  isLoading: boolean = false;

  toasterConfig: ToasterConfig = new ToasterConfig({

    positionClass: 'toast-top-right'
  });

  ngAfterViewInit(): void {

    backToTop();
  }
}
