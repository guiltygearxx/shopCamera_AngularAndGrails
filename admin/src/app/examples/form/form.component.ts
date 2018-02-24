import {Component, OnInit} from '@angular/core';
import {ExampleObject} from "../example-object";
import {ExampleForm} from "../example-form";
import {ValidateUtils} from "../../common/validate/validate-utils";
import {CategoryService} from "../category.service";
import {Category} from "../category";

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

  dateValue: string;

  form: ExampleForm;

  constructor(protected validateUtils: ValidateUtils,
              protected categoryService: CategoryService) {
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

    this.form = new ExampleForm();
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

  dateValueChanged(value: string) {

    console.log("dateValueChanged: " + value);
  }

  getErrorMessage(field: string): string {

    return this.validateUtils.getFieldErrorMessage(field, this.form);
  }

  formFieldChanged(value: any, field: string): void {

    this.validateUtils.validateField(this.form, ExampleForm.constrains, field);
  }

  save(event: any): void {

    event.preventDefault();

    this.validateUtils.validate(this.form, ExampleForm.constrains);

    console.log(JSON.stringify(this.form.errors.getFieldErrors()));
  }

  get(event: any): void {

    event.preventDefault();

    console.log("test get");

    this.categoryService.get().subscribe((categories) => console.log(JSON.stringify(categories)));
  }

  getById(event: any): void {

    event.preventDefault();

    console.log("test getById");

    let categoryId: string = '28ff3667-89e1-4dec-a631-4568b456e7f3';

    this.categoryService.getById(categoryId).subscribe((category) => console.log(JSON.stringify(category)));
  }

  post(event: any): void {

    event.preventDefault();

    console.log("test getById");

    let category: Category = new Category();

    category.name = "Category Test 04";

    this.categoryService.post(category).subscribe((category_) => console.log(JSON.stringify(category_)));
  }

  put(event: any): void {

  }

  delete(event: any): void {

  }
}
