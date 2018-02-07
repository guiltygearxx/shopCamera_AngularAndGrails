import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-web-header',
  templateUrl: './web-header.component.html',
  styleUrls: ['./web-header.component.css']
})
export class WebHeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(document).ready(function () {
      var navoffeset = $(".agileits_header").offset().top;
      $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        if (scrollpos >= navoffeset) {
          $(".agileits_header").addClass("fixed");
        } else {
          $(".agileits_header").removeClass("fixed");
        }
      });

    });
  }

}
