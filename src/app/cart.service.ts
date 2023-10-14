import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];

  private apiUrl = "http://localhost:5147/api/shoppingcart";
  constructor(private http: HttpClient) { }

  getCart(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.apiUrl + '/items')
  }

  addToCart(cart: Cart): Observable<Cart> {
    return this.http.post<Cart>(this.apiUrl + '/add', cart);
  }


  removeFromCart(item: Cart): void {
    const index = this.cart.indexOf(item);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  updateCartItem(item: Cart): void {
    const index = this.cart.findIndex((cart) => cart === item);
    if (index !== -1) {
      this.cart[index] = item;
    }
  }
}

