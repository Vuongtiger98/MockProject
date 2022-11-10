import { ProductService, Product } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  searchText : string;
  products: Product = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  };
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res: Product) =>{
      this.products = res;
    })
  }

}
