import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products : Product[];
  selectedProduct : Product;

  constructor(private _productService:ProductService) {
    this._productService.getProducts().then(ps=>{this.products=ps});
   }

  ngOnInit(): void {       
    
  }

  viewDetail(product: Product){
    this.selectedProduct = product;
  }

}
