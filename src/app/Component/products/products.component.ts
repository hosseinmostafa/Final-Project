import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'] // Corrected 'styleUrls'
})
export class ProductsComponent {
  isFilterVisible = false;
  searchTerm: string = '';
  filterCategory: string = '';
  filterPrice: number | null = null;
  filterDate: string = '';

  // Sample product data
  products = [
    { name: 'Terracotta vase with indigenous pattern', price: 200, image: 'https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585706.jpg' },
    { name: 'Terracotta vase with indigenous pattern', price: 50, image: 'https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585700.jpg' },
    { name: 'Ancient pottery vessel with retro design', price: 70, image: 'https://img.freepik.com/free-photo/ancient-pottery-vessel-with-retro-design_23-2151538286.jpg' },
    { name: 'Elegant modern vase design', price: 120, image: 'https://img.freepik.com/free-photo/elegant-modern-vase-design_23-2150529795.jpg' },
    { name: 'Minimal modern vase indoors', price: 200, image: 'https://img.freepik.com/free-photo/minimal-modern-vase-indoors_23-2149681090.jpg' },
    { name: 'Still life with modern vases soft aesthetics', price: 150, image: 'https://img.freepik.com/free-photo/still-life-with-modern-vases-soft-aesthetics_52683-95199.jpg' },
    { name: 'A sweater with birds on it', price: 100, image: 'https://img.freepik.com/premium-photo/sweater-with-birds-it-sits-table_1221953-54570.jpg' },
    { name: 'A knitted sweater with a flower on it', price: 120, image: 'https://img.freepik.com/premium-photo/knitted-sweater-with-flower-it-sits-table_1221953-54601.jpg' },
    { name: 'Handmade fabric design close-up', price: 90, image: 'https://img.freepik.com/free-photo/handmade-fabric-design-close-up_23-2148827112.jpg' },
    { name: 'Cozy knitted beige sweater', price: 90, image: 'https://img.freepik.com/premium-psd/cozy-knitted-beige-sweater_53876-209837.jpg' },
    { name: 'A sweater with a sweater on it that has a shirt on it', price: 125, image: 'https://img.freepik.com/premium-psd/sweater-with-sweater-it-that-has-shirt-it_1214022-9863.jpg' },
    { name: 'A sweater with a sweater on it that has a pattern', price: 130, image: 'https://img.freepik.com/premium-psd/sweater-with-sweater-it-that-has-pattern_1214022-10150.jpg' },
    { name: 'A scarf with a green and brown pattern', price: 220, image: 'https://img.freepik.com/premium-psd/scarf-with-green-brown-pattern-transparent-background_1214022-10278.jpg' },
    { name: 'A blue sweater', price: 300, image: 'https://img.freepik.com/premium-psd/blue-sweater-with-pattern-white-blue-shirt-transparent-background_1214022-10596.jpg' },
    { name: 'A womans bracelet', price: 30, image: 'https://img.freepik.com/premium-photo/womans-bracelet-is-table-with-other-items_198456-1105.jpg' },
    { name: 'A colorful necklace with flowers and butterflies on it', price: 50, image: 'https://img.freepik.com/premium-photo/colorful-necklace-with-flowers-butterflies-it_198456-502.jpg' },
    { name: 'A hand holding a colorful friendship bracelet', price: 60, image: 'https://img.freepik.com/premium-photo/hand-holding-colorful-friendship-bracelet-isolated-white-background_860932-3934.jpg' },
    { name: 'A hand holding a colorful friendship bracelet', price: 100, image: 'https://img.freepik.com/premium-photo/hand-holding-colorful-friendship-bracelet-isolated-white-background_860932-3935.jpg' }
  ];

  filteredProducts = [...this.products];

  // Toggle Filter Visibility
  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  // Search Functionality
  searchProducts() {
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Apply Filters based on User Input
  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const matchesCategory = this.filterCategory
        ? product.name.toLowerCase().includes(this.filterCategory.toLowerCase()) // Adjusted to match product's name as there's no category in the data
        : true;
      const matchesPrice = this.filterPrice
        ? product.price <= this.filterPrice // Corrected to compare product price
        : true;
      const matchesDate = this.filterDate
        ? this.checkDateCondition(product)
        : true;
      return matchesCategory && matchesPrice && matchesDate;
    });
  }

  // Date Filter (Placeholder for custom logic)
  checkDateCondition(product: any): boolean {
    // Implement custom date filtering logic if needed
    return true;
  }

  // Split filtered products into chunks of 3 for display
  get filteredProductsChunks() {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < this.filteredProducts.length; i += chunkSize) {
      chunks.push(this.filteredProducts.slice(i, i + chunkSize));
    }
    return chunks;
  }
}
