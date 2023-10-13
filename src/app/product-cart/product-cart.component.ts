import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Cart } from '../cart';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  cart: Cart[] = [];
  product: Product  = {
    id: 0,
    name: "",
    price: 0,
    description: ""
  };

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCart()
      .subscribe(cart => this.cart = cart);
  }

  // addToCart(product: Product) {
  //   // Implement the logic for adding the product to the cart
  //   this.cart.push(product);
  // }

}
