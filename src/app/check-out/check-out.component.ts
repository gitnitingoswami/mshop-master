
import {  Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  
 cart$:Observable<ShoppingCart>;
 


   constructor(
     private shoppingCartService:ShoppingCartService) { }

 async ngOnInit(){
   this.cart$ = await this.shoppingCartService.getCart();
   console.log(this.cart$);
  
  }
  
  
  
}
