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

  createProduct(product: Product): Observable<string> {
    return this.http.post<string>(this.apiUrl, product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/list')
  }

  // getProductById(id: number) {
  //   return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  // }

  getProductById(id: number): Observable<Product> {
    let getByIdUrl = this.apiUrl + "/" + id
    return this.http.get<Product>(getByIdUrl);
  }

  // deleteProduct(id: number) {
  //   return this.http.delete<Product>(`${this.apiUrl}/products/${id}`);
  // }

  deleteProduct(id: number): Observable<Product[]> {
    const deleteUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<Product[]>(deleteUrl);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/products/${product.id}`, product);
  }


}

