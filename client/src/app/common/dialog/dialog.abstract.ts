import {DialogModal} from "./dialog-modal.inteface";
import {OnInit} from "@angular/core";
import {DialogComponent} from "ng2-bootstrap-modal";
import {ModuleInputData} from "../form/base-form/module-input-data";

export abstract class DialogAbstract<T1, T2>
  extends DialogComponent<DialogModal<T1>, T2> implements OnInit, DialogModal<T1> {

  inputData: ModuleInputData<T1>;

  title: string;

  ngOnInit(): void {

    this.initDialog();
  }

  abstract doAction(actionCode: string): void;

  abstract initDialog(): void;
}
