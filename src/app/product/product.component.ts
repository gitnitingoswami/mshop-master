import { ShoppingCartService } from './../shopping-cart.service';
import { switchMap } from 'rxjs/operators';
import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from './../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { query } from '@angular/animations';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
isloading=false;
products=[];
filterdProducts:Product[]=[];
category:string;
quer;
cart$:Observable<ShoppingCart>;
images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(
   private route:ActivatedRoute,
   private productService:ProductService,
   private shoppingCartService:ShoppingCartService,
    ) { 

    
  }
 async ngOnInit(){
 this.cart$= await this.shoppingCartService.getCart();
this.populateProduct();
}

private populateProduct() {
  this.isloading=true;
  this.productService
   .getAll() 
   .pipe(switchMap(products => 
  {
  
    this.products=products;
    
    return  this.route.queryParamMap;
  }))

    .subscribe(params =>{
      this.category= params.get('category');
     this.applyFilter();
    
          });
          this.isloading=false;
}
 search(query){
   this.productService.getAll().subscribe(product=>{
     this.products=product
   })

   console.log(this.products)
   console.log(query.value);
  this.filterdProducts= (query.value) ?
  this.products.filter(p =>p.title.includes(query.value)):
  this.products;
  console.log(this.filterdProducts);
}
  
private applyFilter() {
  this.isloading=true;
  this.filterdProducts= (this.category) ?
  this.products.filter(p =>p.category === this.category):
  this.products;
  this.isloading=false;
  
}
}
