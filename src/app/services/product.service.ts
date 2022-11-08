import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = "https://fakestoreapi.com";
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product>(this.baseURL + '/products');
  } 

  getProduct(id) {
    return this.http.get<Product>(this.baseURL + '/products/' + id);
  }
}
