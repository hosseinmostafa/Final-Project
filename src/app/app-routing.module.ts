import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SginInSignUpComponent } from './Component/sgin-in-sign-up/sgin-in-sign-up.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotFondComponent } from './Component/notFond/not-fond/not-fond.component';
import { PaymentComponent } from './Component/payment/payment.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { UsersComponent } from './Component/users/users.component';
import { ProductsComponent } from './Component/products/products.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { CartComponent } from './Component/cart/cart.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "sgin-in-sign-up", component: SginInSignUpComponent },
  { path: "payment", component: PaymentComponent },
  { path: "add-prouduct", component: AddProductComponent },
  {path:"product/:id",component:ProductDetailsComponent},
  { path: "users", component: UsersComponent },
  { path: "products", component: ProductsComponent },
  {path:"cart",component:CartComponent},
  { path: "**", component: NotFondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
