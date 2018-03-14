import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputTextComponent} from "../input-text/input-text.component";

@Component({
  selector: 'app-input-text-with-icon',
  templateUrl: './input-text-with-icon.component.html',
  styleUrls: ['./input-text-with-icon.component.css']
})
export class InputTextWithIconComponent extends InputTextComponent {

  @Input()
  inputIcon: string;

  @Output()
  inputIconClick: EventEmitter<any> = new EventEmitter<any>();

  inputIconClicked(event: any): void {

    event.preventDefault();

    this.inputIconClick.emit();
  }
}
