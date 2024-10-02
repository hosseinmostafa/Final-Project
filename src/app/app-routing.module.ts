import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SginInSignUpComponent } from './Component/sgin-in-sign-up/sgin-in-sign-up.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { PotteryComponent } from './Component/pottery/pottery.component';
import { NotFondComponent } from './Component/notFond/not-fond/not-fond.component';
import { PaymentComponent } from './Component/payment/payment.component';

const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "home", component : HomeComponent},
  {path: "sgin-in-sign-up", component : SginInSignUpComponent},
  {path: "pottery", component : PotteryComponent},
  {path: "payment", component : PaymentComponent},
  {path: "**", component : NotFondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
