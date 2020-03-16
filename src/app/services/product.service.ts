import { Injectable } from '@angular/core';
import { PRODUCTS, Product } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts():Promise<Product[]>{
    return Promise.resolve(PRODUCTS);
  }

  constructor() { }
}
