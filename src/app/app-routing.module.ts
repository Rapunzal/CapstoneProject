import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminComponent } from './admin/admin.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'updateProduct/:id',component:UpdateProductComponent
  },
  {
    path:'updateUser/:id',component:UpdateUserComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'admin-page/home',component:ViewProductComponent
  },
  {
    path:'admin-page/addProduct',component:AddProductComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'admin-page',component:AdminPageComponent,canActivate:[AuthGuardGuard]
  }
  ,
  {
    path:'admin-page/userList',component:UserComponent,canActivate:[AuthGuardGuard]
  },
  {
    path:'user-registration',component:UserRegistrationComponent
  },
  {
    path:'user-login',component:UserLoginComponent
  },
  {
    path:'user-page/:id',component:UserPageComponent
  },
  {
    path:'cart-page/:id',component:CartComponent

  },
  {
    path:'cart-page/:id',component:CartComponent

  },
  {
    path:'search/:str',component:SearchComponent
  },
  {
    path:'payment/:str/:id',component:PaymentComponent
  },
  {
    path:'confirmation/:str/:id',component:ConfirmationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
