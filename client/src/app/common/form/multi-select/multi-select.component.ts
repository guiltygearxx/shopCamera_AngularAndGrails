import {Component, Input, OnInit} from '@angular/core';
import {BaseSelect} from "../base-form/base-select";
import {isNullOrUndefined} from "util";
import {compareString} from "../../../service/utils/application-utils";

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent extends BaseSelect {

  @Input()
  title: string;

  @Input()
  icon: string;

  protected buildSelectOptions(): void {

    super.buildSelectOptions();

    if (!isNullOrUndefined(this.selectOptions)) {

      this.selectOptions.sort((option1, options2) => {

        return compareString(option1.name, options2.name);
      });
    }
  }

  protected buildSelectSettings(): void {

    super.buildSelectSettings();

    let options = this.selectSettings;

    if (isNullOrUndefined(options.placeholder)) {

      if (!isNullOrUndefined(this.title)) {

        options.placeholder = "Chọn " + this.title;
      }
    }
  }

}
