

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service
import { Product } from '../product';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Cart } from '../cart';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
 



  constructor(
    private productService: ProductService,
    private router: Router ,
    private cartService: CartService
    // Inject the Router service
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }


  detailsProduct(productId: number) {
    // Implement the logic for editing the product (e.g., navigate to the edit page)
    this.router.navigate(['/details', productId]); // Example route for editing
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }

  addToCart(product: Product) {
    const cartItem: Cart = {
      id: 0, // Set to 0 or a unique value generated on the server
      productId: product.id,
      name: product.name || '',
      quantity: 1,
      product: product
    };
  
    this.cartService.addToCart(cartItem).subscribe((addedCartItem) => {
      console.log("Added to cart:", addedCartItem);
    });
  }
  
}
