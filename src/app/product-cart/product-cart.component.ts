// import { CartService } from './../cart.service';
// import { Component, OnInit } from '@angular/core';
// import { Product } from '../product';
// import { Cart } from '../cart';

// @Component({
//   selector: 'app-product-cart',
//   templateUrl: './product-cart.component.html',
//   styleUrls: ['./product-cart.component.css']
// })
// export class ProductCartComponent implements OnInit {
//   cart: Cart[] = [];
//   product: Product  = {
//     id: 0,
//     name: "",
//     price: 0,
//     description: ""
//   };

//   constructor(private cartService: CartService) {}

//   ngOnInit() {
//     this.cartService.getCart()
//       .subscribe(cart => this.cart = cart);
//   }

// }


import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart} from '../cart';

@Component({
  selector: 'app-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.cartService.getCart()
        .subscribe(cart => this.cart = cart);
    }

  removeFromCart(item: Cart): void {
    this.cart = this.cart.filter((cartItem) => cartItem !== item);
    this.cartService.removeFromCart(item);
  }

  increaseQuantity(item: Cart): void {
    if (item) {
      if (item.quantity !== undefined) {
        item.quantity++;
        this.cartService.updateCartItem(item);
      }
    }
  }

  decreaseQuantity(item: Cart): void {
    if (item) {
      if (item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
        this.cartService.updateCartItem(item);
      }
    }
  }
}
