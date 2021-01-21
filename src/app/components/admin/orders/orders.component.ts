import { Component} from '@angular/core';
import {Order} from '../../../models/order.model';
import {OrdersService} from '../../../services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public orders: Order[] = [];
  public selectedOrder: Order;

  constructor(private ordersService: OrdersService) {
    this.ordersService.getAllOrders()
      .then((orders: Order[]) => {
        this.orders = orders.reverse();
        if(orders.length !== 0){
          this.selectedOrder = orders[0];
          this.orders.forEach((order: Order) => order.show = true);
        }
        else{
          this.selectedOrder = null;
        }
      });
  }

  public selectOrderEventListener(newSelectedOrder: Order){
    this.selectedOrder = newSelectedOrder;
  }


}
