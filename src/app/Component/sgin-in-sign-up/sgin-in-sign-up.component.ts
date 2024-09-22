import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sgin-in-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sgin-in-sign-up.component.html',
  styleUrl: './sgin-in-sign-up.component.scss'
})
export class SginInSignUpComponent {
  img1: string = "./img-Sign/add-to-cart-animate (3).svg"
  img2: string = "./img-Sign/online-shopping-animate.svg"

  
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const sign_in_btn = this.elementRef.nativeElement.querySelector('#sign-in-btn');
    const sign_up_btn = this.elementRef.nativeElement.querySelector('#sign-up-btn');
    const container = this.elementRef.nativeElement.querySelector('.containe');

    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });

    // password Sign-in
    const pass = this.elementRef.nativeElement.querySelector('#password');
    const btn = this.elementRef.nativeElement.querySelector('#btn');
    const icon = this.elementRef.nativeElement.querySelector('.icon');

    btn.addEventListener('click', () => {
      if (pass.type === 'text') {
        pass.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        pass.type = 'text';
        icon.classList.add('fa-eye');
        icon.classList.remove('fa-eye-slash');
      }
    });

    // password Sign-up
    const pass2 = this.elementRef.nativeElement.querySelector('#password2');
    const btn2 = this.elementRef.nativeElement.querySelector('#btn2');
    const icon2 = this.elementRef.nativeElement.querySelector('.icon2');

    btn2.addEventListener('click', () => {
      if (pass2.type === 'text') {
        pass2.type = 'password';
        icon2.classList.remove('fa-eye');
        icon2.classList.add('fa-eye-slash');
      } else {
        pass2.type = 'text';
        icon2.classList.add('fa-eye');
        icon2.classList.remove('fa-eye-slash');
      }
    });
  }
}