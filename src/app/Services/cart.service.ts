import { Injectable } from '@angular/core';
import { Iproduct } from '../Component/interfaces/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: Iproduct[] = [];

  addToCart(product: Iproduct) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  } 
}
