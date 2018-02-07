import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-icheck',
  templateUrl: './icheck.component.html',
  styleUrls: ['./icheck.component.css']
})
export class IcheckComponent implements OnInit, OnDestroy, OnChanges {

  @ViewChild("checkbox")
  checkbox: ElementRef;

  @Input()
  checked: boolean = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {

    this.initIcheckPlugin();
  }

  ngOnDestroy(): void {

    $(this.checkbox.nativeElement).iCheck("destroy");
  }

  private initIcheckPlugin(): void {

    var this_ = this;

    $(this.checkbox.nativeElement).prop("checked", this.checked);

    $(this.checkbox.nativeElement).iCheck({

      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });

    $(this.checkbox.nativeElement).on("ifClicked", function (event) {

      this_.change.emit((this_.checked = !this_.checked));
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    (changes.checked.currentValue != changes.checked.previousValue) && (
      $(this.checkbox.nativeElement).prop("checked", this.checked).iCheck("update")
    )
  }
}
