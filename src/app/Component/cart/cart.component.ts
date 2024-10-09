import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';  // Adjust as needed
import { Iproduct } from '../interfaces/Iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
goToPayment() {
this.router.navigate(['/payment']);
}
  cartItems: Iproduct[] = [];

  constructor(private cartService: CartService,private router:Router) {
    this.cartItems = this.cartService.getCartItems();

    // Initialize the quantity for each item if not already present (default to 1)
    this.cartItems.forEach(item => {
      if (!item.quantity) {
        item.quantity = 1;
      }
    });
  }

  // Decrease quantity (don't go below 1)
  decreaseQuantity(item: Iproduct) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Increase quantity
  increaseQuantity(item: Iproduct) {
    item.quantity++;
  }

  // Calculate total cost of the cart
  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}
