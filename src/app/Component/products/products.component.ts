import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Iproduct } from '../interfaces/Iproduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];
  errMsg: string | null = null;
  isFilterVisible = false;
  searchTerm: string = '';
  filterCategory: string = '';
  filterPrice: number | null = null;
  filterDate: string = ''; // To hold the selected date

  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;
      },
      error: (err) => {
        this.errMsg = err;
      },
    });
  }
goToProductDetails(id:string){
  this.router.navigate(['/product',id])
}
  // Toggle Filter Visibility
  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  // Search Functionality
  searchProducts() {
    this.applyFilters();
  }

  // Apply Filters based on User Input
  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = this.filterCategory
        ? product.name.toLowerCase().includes(this.filterCategory.toLowerCase())
        : true;
      const matchesPrice = this.filterPrice
        ? product.price <= this.filterPrice
        : true;
      const matchesDate = this.filterDate
        ? this.checkDateCondition(product.date)
        : true;

      return matchesCategory && matchesPrice && matchesDate;
    });
  }

  // Date Filter Condition
  checkDateCondition(productDate: string): boolean {
    // Implement custom date filtering logic if needed
    return true;
  }

  // Get products in chunks for the carousel
  get filteredProductsChunks() {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < this.filteredProducts.length; i += chunkSize) {
      chunks.push(this.filteredProducts.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
