import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http : HttpClient) { }  //DI for Http Client

  loadProductData() : Observable<Product[]> {
    return this.http.get<Product[]>("http://fakestoreapi.com/products")

  }
}
