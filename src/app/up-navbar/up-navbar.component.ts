import { Observable } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'up-navbar',
  templateUrl: './up-navbar.component.html',
  styleUrls: ['./up-navbar.component.css']
})
export class UpNavbarComponent implements OnInit{
appUser: AppUser;
  cart$:Observable<ShoppingCart>;
  navbarOpen=false;

  constructor(private auth :AuthService, private shoppingCartService:ShoppingCartService) {  }

async ngOnInit(){
this.auth.appUser$.subscribe(appUser =>this.appUser = appUser);

this.cart$=await this.shoppingCartService.getCart();

}
togglenavabr(){
  this.navbarOpen=!this.navbarOpen;
}

 logout(){
     this.auth.logout();
 }
}
