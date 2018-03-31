import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

    $(function () {
      /* BOOTSTRAP SLIDER */
      $('.slider').slider();

      /* ION SLIDER */
      $("#range_1").ionRangeSlider({
        min: 0,
        max: 99000000,
        from: 100000,
        to: 400000,
        type: 'double',
        step: 1,
        prefix: "$",
        prettify: false,
        hasGrid: true
      });
      $("#range_2").ionRangeSlider();

      $("#range_5").ionRangeSlider({
        min: 0,
        max: 10,
        type: 'single',
        step: 0.1,
        postfix: " mm",
        prettify: false,
        hasGrid: true
      });
      $("#range_6").ionRangeSlider({
        min: -50,
        max: 50,
        from: 0,
        type: 'single',
        step: 1,
        postfix: "°",
        prettify: false,
        hasGrid: true
      });

      $("#range_4").ionRangeSlider({
        type: "single",
        step: 100,
        postfix: " light years",
        from: 55000,
        hideMinMax: true,
        hideFromTo: false
      });
      $("#range_3").ionRangeSlider({
        type: "double",
        postfix: " miles",
        step: 10000,
        from: 25000000,
        to: 35000000,
        onChange: function (obj) {
          var t = "";
          for (var prop in obj) {
            t += prop + ": " + obj[prop] + "\r\n";
          }
          $("#result").html(t);
        },
        onLoad: function (obj) {
          //
        }
      });
    });
  }

}
