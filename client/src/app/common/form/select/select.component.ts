import {Component, Input, OnInit} from '@angular/core';
import {BaseSelect} from "../base-form/base-select";
import {isNullOrUndefined} from "util";
import {compareString} from "../../../service/utils/application-utils";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends BaseSelect {
  @Input()
  title: string;

  @Input()
  icon: string;

  @Input()
  sort: boolean = true;

  protected buildSelectSettings(): void {

    super.buildSelectSettings();

    let options = this.selectSettings;

    if (isNullOrUndefined(options.placeholder)) {

      if (!isNullOrUndefined(this.title)) {

        options.placeholder = "Chọn " + this.title;
      }
    }
  }

  protected buildSelectOptions(): void {

    super.buildSelectOptions();

    if (!isNullOrUndefined(this.selectOptions) && this.sort) {

      this.selectOptions.sort((option1, options2) => {

        return compareString(option1.name, options2.name);
      });
    }
  }
}
