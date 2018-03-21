import {Component, OnInit} from '@angular/core';
import {ToasterConfig} from "angular2-toaster/angular2-toaster";

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  projectYears: number[] = [
    1, 2, 3, 4
  ];

  ngOnInit(): void {

    $(document).ready(function ($) {
      $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 1000);
      });
    });

  }

}
