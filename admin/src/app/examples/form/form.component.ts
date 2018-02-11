import {Component, OnInit} from '@angular/core';
import {ExampleObject} from "../example-object";

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

  selectValue: string;

  selectValue2: string;

  items: ExampleObject[];

  items2: ExampleObject[];

  constructor() {
  }

  ngOnInit() {

    this.items = [
      new ExampleObject("Item No 1", "value1"),
      new ExampleObject("Item No 3", "value3"),
      new ExampleObject("Item No 6", "value6"),
      new ExampleObject("Item No 4", "value4"),
    ]

    this.items2 = [
      new ExampleObject("Item No 1", "value1"),
      new ExampleObject("Item No 3", "value3"),
      new ExampleObject("Item No 6", "value6"),
      new ExampleObject("Item No 5", "value5"),
      new ExampleObject("Item No 2", "value2"),
      new ExampleObject("Item No 4", "value4"),
    ]
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

  selectValueChanged(value: string) {

    console.log("selectValueChanged: " + value);
  }

  selectValue2Changed(value: string) {

    console.log("selectValue2Changed: " + value);
  }
}
