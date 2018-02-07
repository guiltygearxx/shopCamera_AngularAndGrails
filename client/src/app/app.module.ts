import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CheckBoxComponent } from './common/form/check-box/check-box.component';
import { TextAreaComponent } from './common/form/text-area/text-area.component';
import { InputFileComponent } from './common/form/input-file/input-file.component';
import { InputTextComponent } from './common/form/input-text/input-text.component';
import { SelectComponent } from './common/form/select/select.component';
import { MultiSelectComponent } from './common/form/multi-select/multi-select.component';
import { RadioButtonComponent } from './common/form/radio-button/radio-button.component';
import { DefaultModalFooterComponent } from './common/dialog/default-modal-footer/default-modal-footer.component';
import { DefaultModalHeaderComponent } from './common/dialog/default-modal-header/default-modal-header.component';
import { DropDownButtonComponent } from './common/form/drop-down-button/drop-down-button.component';
import { ConfirmDialogComponent } from './common/confirm-dialog/confirm-dialog.component';
import { IcheckComponent } from './common/form/icheck/icheck.component';
import {AppRoutingModule} from "./app-routing/app-routing.module";
import { WebHeaderComponent } from './web-template/web-header/web-header.component';
import { WebContentComponent } from './web-template/web-content/web-content.component';
import { WebFooterComponent } from './web-template/web-footer/web-footer.component';
import { DetailProductComponent } from './web-template/detail-product/detail-product.component';
import { IndexContentComponent } from './web-template/index-content/index-content.component';
import { WebLeftSideComponent } from './web-template/web-left-side/web-left-side.component';
import { ListProductsComponent } from './web-template/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    TextAreaComponent,
    InputFileComponent,
    InputTextComponent,
    SelectComponent,
    MultiSelectComponent,
    RadioButtonComponent,
    DefaultModalFooterComponent,
    DefaultModalHeaderComponent,
    DropDownButtonComponent,
    ConfirmDialogComponent,
    IcheckComponent,
    WebHeaderComponent,
    WebContentComponent,
    WebFooterComponent,
    DetailProductComponent,
    IndexContentComponent,
    WebLeftSideComponent,
    ListProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
