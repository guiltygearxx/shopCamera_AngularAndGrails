import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.css']
})
export class WebFooterComponent implements OnInit, AfterViewInit {


  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

    $().UItoTop({easingType: 'easeOutQuart'});
  }

}
