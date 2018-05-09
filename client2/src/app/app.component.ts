import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {ToasterConfig} from "angular2-toaster";
import {HttpService} from "./common/http.service";

declare var $: any;

declare var backToTop: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

  @ViewChild("loadingDiv")
  loadingDiv: ElementRef;

  toasterConfig: ToasterConfig = new ToasterConfig({

    positionClass: 'toast-top-right'
  });

  constructor(protected httpService: HttpService) {

    this.httpService.loadingHandleFn = (loadingFlag => this.loadingHandler(loadingFlag));
  }

  ngAfterViewInit(): void {

    backToTop();
  }

  ngOnDestroy(): void {

    this.httpService.loadingHandleFn = null;
  }

  private loadingHandler(loadingFlag: number): void {

    loadingFlag > 0 ? $(this.loadingDiv.nativeElement).addClass("isLoading")
      : $(this.loadingDiv.nativeElement).removeClass("isLoading");
  }

}
