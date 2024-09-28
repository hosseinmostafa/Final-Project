import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { SginInSignUpComponent } from './Component/sgin-in-sign-up/sgin-in-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SginInSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
