import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Iproduct } from '../Component/interfaces/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = './data/products.json';

  constructor(private http: HttpClient) {}
  getProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.apiUrl).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'server error');
      })
    );
  }
}
