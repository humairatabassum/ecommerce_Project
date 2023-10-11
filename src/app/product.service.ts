import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private apiUrl = "http://localhost:5147/api/ProductApi";
  constructor(private http: HttpClient) { }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.apiUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/list')
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}

