import { Component } from '@angular/core';
import { USERModul} from './UserModule';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  userModel: USERModul = new USERModul('', '', '', '', ''); // added type annotationhyy

  constructor(private userService: UserService) {}

  // onSubmit() {
  //   this.userService.addUser(this.userModel).subscribe({
  //     next: (data) => console.log(data),
  //     error: (error) => console.log(error),
  //   });
  // }
}
