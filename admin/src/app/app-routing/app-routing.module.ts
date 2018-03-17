import {StarterComponent} from './../starter/starter.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ImportProductComponent} from "../import-product/import-product.component";
import {FormComponent} from "../examples/form/form.component";
import {ProductIndexComponent} from "../product-index/product-index.component";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {UploadFileIndexComponent} from "../upload-file-index/upload-file-index.component";
import {ContactIndexComponent} from "../contact-index/contact-index.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'starter', pathMatch: 'full'},
      {
        path: 'starter', component: StarterComponent,

        children: [

          {path: '', redirectTo: "productIndex", pathMatch: "full"},
          {path: 'importProduct', component: ImportProductComponent},
          {path: 'productIndex', component: ProductIndexComponent},
          {path: 'productDetail/:id', component: ProductDetailComponent},
          {path: 'productDetail', component: ProductDetailComponent},
          {path: 'uploadFileIndex', component: UploadFileIndexComponent},
          {path: 'contactIndex', component: ContactIndexComponent},
          {path: 'example', component: FormComponent},
        ]
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
