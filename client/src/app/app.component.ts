import {AfterViewInit, Component} from '@angular/core';
import {ToasterConfig} from "angular2-toaster/angular2-toaster";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'app';

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  ngAfterViewInit(): void {

    $(".scroll").click(function (event) {

      event.preventDefault();

      $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
  }
}
