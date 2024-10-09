import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  
  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  
  login(token: string): void {
    localStorage.setItem('userToken', token);
  }

 
  logout(): void {
    localStorage.removeItem('userToken');
  }
}