import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from "../app.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', component: AppComponent},
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
