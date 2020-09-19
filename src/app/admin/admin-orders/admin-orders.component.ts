import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { OrderService } from 'src/app/order.service';
import { switchMap } from 'rxjs/operators';
import { SubscriptionLike } from 'rxjs';

@Component({
  selector: 'admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent  {

  orders$;
  Subscriptio:SubscriptionLike;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  )
   { 
    this.orders$ = this.authService.user$.pipe(switchMap(u => this.orderService.getOrders()));
    console.log(this.orders$);
  

  }


}
