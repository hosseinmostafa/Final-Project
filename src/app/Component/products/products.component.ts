import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  isFilterVisible = false;

  toggleFilter() {
    this.isFilterVisible = !this.isFilterVisible;
  }

  // Sample product data
  products = [
    { name: 'Terracotta vase with indigenous pattern', image: 'https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585706.jpg?t=st=1727879090~exp=1727882690~hmac=9d67e7b2353d3e1ca8a720357d13776078372a698385623a98e8984c59eb251f&w=1380' ,price :'$200' },
    { name: 'Terracotta vase with indigenous pattern', price: '50$', image: 'https://img.freepik.com/free-photo/terracotta-vase-with-indigenous-pattern_23-2151585700.jpg?t=st=1727879446~exp=1727883046~hmac=e42fbeb738ff255e72584341089fced2b20c8e1a0039d5fcda0e73ad5cf3c634&w=1380' },
    { name: 'Ancient pottery vessel with retro design', price: '70$', image: 'https://img.freepik.com/free-photo/ancient-pottery-vessel-with-retro-design_23-2151538286.jpg?t=st=1727879491~exp=1727883091~hmac=1cc25aa058c59b2b15d72e556e19b5fb26f697829f85fac3522c2e96a33c81ac&w=1380' },
    { name: 'Elegant modern vase design', price: '120$', image: 'https://img.freepik.com/free-photo/elegant-modern-vase-design_23-2150529795.jpg?t=st=1727879534~exp=1727883134~hmac=3f3509e453a6e6bcf5640445f3a7cf5782dd7706442957ddebb6f0c294cb7976&w=1380' },
    { name: 'Minimal modern vase indoors', price: '200$', image: 'https://img.freepik.com/free-photo/minimal-modern-vase-indoors_23-2149681090.jpg?t=st=1727879584~exp=1727883184~hmac=3611e3965660dbd35dbee1f593289de2ef310bbc6772b1e4758b2d29907e0c30&w=740' },
    { name: 'Still life with modern vases soft aesthetics', price: '150$', image: 'https://img.freepik.com/free-photo/still-life-with-modern-vases-soft-aesthetics_52683-95199.jpg?t=st=1727879668~exp=1727883268~hmac=a4ab688c45e3bd754b5c3099b19277bccc92aa09f0839af76203cde61b9dc2dc&w=740' },
    { name: 'A sweater with birds on it ', price: '100$', image: 'https://img.freepik.com/premium-photo/sweater-with-birds-it-sits-table_1221953-54570.jpg' },
    { name: 'A knitted sweater with a flower on it', price: '120$', image: 'https://img.freepik.com/premium-photo/knitted-sweater-with-flower-it-sits-table_1221953-54601.jpg' },
    { name: 'Handmade fabric design close-up', price: '90$', image: 'https://img.freepik.com/free-photo/handmade-fabric-design-close-up_23-2148827112.jpg?t=st=1727879896~exp=1727883496~hmac=6c6e00551fe126ef1414cd0d19332a3093b926f9f980685dabb0a3e42d036b46&w=740' },
    { name: 'Cozy knitted beige sweater', price: '90$', image: 'https://img.freepik.com/premium-psd/cozy-knitted-beige-sweater_53876-209837.jpg' },
    { name: 'A sweater with a sweater on it that has a shirt on it', price: '125$', image: 'https://img.freepik.com/premium-psd/sweater-with-sweater-it-that-has-shirt-it_1214022-9863.jpg' },
    { name: 'A sweater with a sweater on it that has a pattern', price: '130$', image: 'https://img.freepik.com/premium-psd/sweater-with-sweater-it-that-has-pattern_1214022-10150.jpg' },
    { name: 'A scarf with a green and brown pattern', price: '220$', image: 'https://img.freepik.com/premium-psd/scarf-with-green-brown-pattern-transparent-background_1214022-10278.jpg?w=826' },
    { name: 'A blue sweater  ', price: '300$', image: 'https://img.freepik.com/premium-psd/blue-sweater-with-pattern-white-blue-shirt-transparent-background_1214022-10596.jpg' },
    { name: 'A womans bracelet ', price: '30$', image: 'https://img.freepik.com/premium-photo/womans-bracelet-is-table-with-other-items_198456-1105.jpg' },
    { name: 'A colorful necklace with flowers and butterflies on it', price: '50$', image: 'https://img.freepik.com/premium-photo/colorful-necklace-with-flowers-butterflies-it_198456-502.jpg' },
    { name: 'A hand holding a colorful friendship bracelet', price: '60$', image: 'https://img.freepik.com/premium-photo/hand-holding-colorful-friendship-bracelet-isolated-white-background_860932-3934.jpg' },
    { name: 'A hand holding a colorful friendship bracelet  ', price: '100$', image: 'https://img.freepik.com/premium-photo/hand-holding-colorful-friendship-bracelet-isolated-white-background_860932-3935.jpg' },
  ];
}
