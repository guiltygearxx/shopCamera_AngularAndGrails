import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ToasterConfig} from "angular2-toaster/angular2-toaster";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'app';

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  ngOnInit(): void {

  }

  private initBoxWidgetOptions() {

    let boxWidgetIcons = $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons;

    boxWidgetIcons.collapse = "fa-angle-up";

    boxWidgetIcons.open = "fa-angle-down";

    boxWidgetIcons.remove = "fa-angle-down";
  }

  ngAfterViewInit(): void {

    this.initBoxWidgetOptions();

    $(".scroll").click(function (event) {

      event.preventDefault();

      $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
    });
  }

}
