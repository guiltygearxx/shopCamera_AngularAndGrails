import {StarterComponent} from './../starter/starter.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ImportProductComponent} from "../import-product/import-product.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'starter', pathMatch: 'full'},
      {
        path: 'starter', component: StarterComponent,

        children: [

          {path: '', redirectTo: "importProduct", pathMatch: "full"},
          {path: 'importProduct', component: ImportProductComponent},
        ]
      },
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
