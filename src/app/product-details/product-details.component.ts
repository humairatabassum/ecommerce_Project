import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product = {
    id: 0,
    name: "",
    price: 0,
    description: ""
  };
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProductById(this.route.snapshot.params['id']);
  }

  getProductById(id: number): void {
    this.productService.getProductById(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  // save(): void {
  //   if (this.products) {
  //     this.productService.updateProduct(this.products[0])
  //       .subscribe(() => this.goBack());
  //   }
  // }
}

