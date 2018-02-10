import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  inputTextValue: string;

  numberValue: string;

  booleanValue: boolean;

  checkBoxValue: string;

  constructor() {
  }

  ngOnInit() {
  }

  inputTextValueChanged(value: string) {

    console.log("inputTextValueChanged: " + value);
  }

  booleanValueChanged(value: string) {

    console.log("booleanValueChanged: " + value);
  }

  checkBoxValueChanged(value: string) {

    console.log("checkBoxValueChanged: " + value);
  }
}
