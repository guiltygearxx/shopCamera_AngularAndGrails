import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToasterConfig} from 'angular2-toaster';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';

  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  toasterConfig: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right'
  });

  constructor() {
  }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

  ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }

}
