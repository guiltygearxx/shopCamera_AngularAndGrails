import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-default-modal-header',
  templateUrl: './default-modal-header.component.html',
  styleUrls: ['./default-modal-header.component.css']
})
export class DefaultModalHeaderComponent implements OnInit {

  @Input()
  title: string;

  @Output()
  close: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  closeAction(event: any): void {

    this.close.emit(event);
  }

}
