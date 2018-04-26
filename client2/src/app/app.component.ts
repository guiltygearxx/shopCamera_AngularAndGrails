import {Component} from '@angular/core';
import {ToasterConfig} from "angular2-toaster";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toasterConfig: ToasterConfig = new ToasterConfig({

    positionClass: 'toast-top-right'
  });
}
