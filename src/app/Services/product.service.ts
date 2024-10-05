import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
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
  getOneProduct(id: string): Observable<Iproduct | undefined> {


    return this.getProducts().pipe(
  map((products : Iproduct[]) =>{
     const oneProduct = products.find((product) => product.id === id)
     if(!oneProduct){
       throw new Error('product not found')
      }
     return oneProduct
  }),
  catchError((err) => {
    
    return throwError(() => err.message || 'product not found');
  })
)
}
}