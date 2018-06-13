import {StarterComponent} from './../starter/starter.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ImportProductComponent} from '../import-product/import-product.component';
import {FormComponent} from '../examples/form/form.component';
import {ProductIndexComponent} from '../product-index/product-index.component';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {UploadFileIndexComponent} from '../upload-file-index/upload-file-index.component';
import {ContactIndexComponent} from '../contact-index/contact-index.component';
import {SolutionIndexComponent} from '../solution-index/solution-index.component';
import {SolutionDetailComponent} from '../solution-detail/solution-detail.component';
import {NewsIndexComponent} from '../news-index/news-index.component';
import {NewsDetailComponent} from '../news-detail/news-detail.component';
import {LoginComponent} from '../login/login.component';
import {AuthActivateGuard} from '../common/auth-activate-guard';
import {LoginActivateGuard} from '../common/login-activate-guard';
import {OrderIndexComponent} from '../order-index/order-index.component';
import {OrderDetailComponent} from '../order-detail/order-detail.component';
import {ChangePasswordComponent} from '../change-password/change-password.component';
import {CategoryIndexComponent} from '../category-index/category-index.component';
import {CategoryDetailComponent} from '../category-detail/category-detail.component';
import {ConfigurationUiWebComponent} from "../configuration-ui-web/configuration-ui-web.component";
import {BannerComponent} from "../banner/banner.component";
import {AddNewHeaderComponent} from "../configuration-ui-web/add-new-header/add-new-header.component";

@NgModule({
  imports: [
    RouterModule.forRoot([

      {path: '', redirectTo: 'starter', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, canActivate: [LoginActivateGuard]},
      {
        path: 'starter', component: StarterComponent, canActivate: [AuthActivateGuard],

        children: [

          {path: '', redirectTo: 'orderIndex', pathMatch: 'full'},
          {path: 'importProduct', component: ImportProductComponent},

          {path: 'productIndex', component: ProductIndexComponent},
          {path: 'productDetail/:id', component: ProductDetailComponent},
          {path: 'productDetail', component: ProductDetailComponent},

          {path: 'uploadFileIndex', component: UploadFileIndexComponent},
          {path: 'contactIndex', component: ContactIndexComponent},

          {path: 'solutionIndex', component: SolutionIndexComponent},
          {path: 'solutionDetail/:id', component: SolutionDetailComponent},
          {path: 'solutionDetail', component: SolutionDetailComponent},

          {path: 'newsIndex', component: NewsIndexComponent},
          {path: 'newsDetail/:id', component: NewsDetailComponent},
          {path: 'newsDetail', component: NewsDetailComponent},

          {path: 'orderIndex', component: OrderIndexComponent},
          {path: 'orderDetail/:id', component: OrderDetailComponent},

          {path: 'changePassword', component: ChangePasswordComponent},

          {path: 'categoryIndex', component: CategoryIndexComponent},
          {path: 'categoryDetail', component: CategoryDetailComponent},
          {path: 'categoryDetail/:id', component: CategoryDetailComponent},


          {path: 'configurationUi', component: ConfigurationUiWebComponent},
          {path: 'addNewHeader', component: AddNewHeaderComponent},
          {path: 'banner', component: BannerComponent},

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
