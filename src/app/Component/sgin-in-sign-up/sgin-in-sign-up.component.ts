import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../../CostmorFormSigin/costemFormUserName';
import { ConfirmPasswordValidator } from '../../CostmorFormSigin/costemFormPassword';
import { UserService } from '../../Services/user.service';
import { USERModul } from './UserModule';

@Component({
  selector: 'app-sgin-in-sign-up',
  templateUrl: './sgin-in-sign-up.component.html',
  styleUrl: './sgin-in-sign-up.component.scss'
})
export class SginInSignUpComponent {

  img1: string = "./img-Sign/add-to-cart-animate (3).svg"
  img2: string = "./img-Sign/online-shopping-animate.svg"
  
  regsetForm: FormGroup

  userModel = new USERModul('', '', '', '', false);
  constructor(private elementRef: ElementRef, private fb: FormBuilder, private userService: UserService) {
    this.regsetForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      location: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, { validators: [ConfirmPasswordValidator] })
  }

  // ---------------------------
  ngAfterViewInit(): void {
    const sign_in_btn = this.elementRef.nativeElement.querySelector('#sign-in-btn');
    const sign_up_btn = this.elementRef.nativeElement.querySelector('#sign-up-btn');
    const container = this.elementRef.nativeElement.querySelector('.container');

    const sign_in_btn2 = this.elementRef.nativeElement.querySelector('#sign-in-btn2');
    const sign_up_btn2 = this.elementRef.nativeElement.querySelector('#sign-up-btn2');

    // Adding 'sign-up-mode' when sign-up button is clicked
    sign_up_btn.addEventListener('click', () => {
      container.classList.add('sign-up-mode');
    });

    // Removing 'sign-up-mode' when sign-in button is clicked
    sign_in_btn.addEventListener('click', () => {
      container.classList.remove('sign-up-mode');
    });

    // Adding 'sign-up-mode2' when second sign-up button is clicked
    sign_up_btn2.addEventListener('click', () => {
      container.classList.add('sign-up-mode2');
    });

    // Removing 'sign-up-mode2' when second sign-in button is clicked
    sign_in_btn2.addEventListener('click', () => {
      container.classList.remove('sign-up-mode2');
    });
  }
  // ------------------
  gitData() {
    this.regsetForm.patchValue({
      userName: 'Ahmed',
      location: {
        city: 'Egypt',
        state: 'Hurghada',
        postalCode: '123456'
      }
    })

  }

  onSubmit() {
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }


}
