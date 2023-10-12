// import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';
// import { ProductService } from '../product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: Product[] = [];

//   constructor(private productService: ProductService) { }


//   ngOnInit(): void {
//     this.getProducts();
//   }

//   getProducts(): void {
//     this.productService.getProducts().subscribe((data: Product[]) => {
//       this.products = data;
//     });
//   }
// }
// // (products => this.products = products);


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router service
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router // Inject the Router service
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  addToCart(product: Product) {
    // Implement the logic for adding the product to the cart
    this.products.push(product);
  }

  editProduct(productId: number) {
    // Implement the logic for editing the product (e.g., navigate to the edit page)
    this.router.navigate(['/details', productId]); // Example route for editing
  }

  deleteProduct(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }

}
