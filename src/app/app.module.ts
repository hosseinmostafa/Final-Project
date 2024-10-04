import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
// import reactiveFormMdule
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { SginInSignUpComponent } from './Component/sgin-in-sign-up/sgin-in-sign-up.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotFondComponent } from './Component/notFond/not-fond/not-fond.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { UsersComponent } from './Component/users/users.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { ProductsComponent } from './Component/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SginInSignUpComponent,
    HeaderComponent,
    FooterComponent,
    NotFondComponent,
    PaymentComponent,
    UsersComponent,
    AddProductComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
