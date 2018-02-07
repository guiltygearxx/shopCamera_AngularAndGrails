import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

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
