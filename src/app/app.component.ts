import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./Component/home/home.component";
import { SginInSignUpComponent } from "./Component/sgin-in-sign-up/sgin-in-sign-up.component";
import { HeaderComponent } from "./Component/header/header.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { PotteryComponent } from "./Component/pottery/pottery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SginInSignUpComponent, HeaderComponent, FooterComponent, PotteryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'final-project';
}
