import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CartComponent } from './cart/cart.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewProductComponent,
    AddProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    AdminComponent,
    AdminPageComponent,
    UserComponent,
    UpdateUserComponent,
    CartComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    UserPageComponent,
    HomeComponent,
    SearchComponent,
    PaymentComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
