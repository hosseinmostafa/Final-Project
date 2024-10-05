import { Component } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../interfaces/Iproduct';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  oneProduct: any;
  productId:any;
errMsg: any;
constructor(private productService: ProductService , private activatedRoute:ActivatedRoute ) {}

ngOnInit(): void {
  this.productId = this.activatedRoute.snapshot.paramMap.get('id') ;
  this.productService.getOneProduct(this.productId).subscribe({
    next: (data) => {
      this.oneProduct = data;
      console.log(this.oneProduct);
    },
    error: (err) => {
      return throwError(() => err.message || 'product not found');
    }
})
}
}
