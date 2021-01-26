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
  public showOrdersListPanel: boolean = true;
  public showOrderProductsPanel: boolean = true;

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

  public selectOrderEventListener(newSelectedOrder: Order): void{
    this.selectedOrder = newSelectedOrder;
  }
  public clickOrdersListButtonEventListener(): void{
    this.showOrdersListPanel = !this.showOrdersListPanel;
  }
  public clickOrderButtonEventListener(): void{
    this.showOrderProductsPanel = !this.showOrderProductsPanel;
  }

  public onResize(event: any){
    if(event.target.innerWidth >= 768){
      this.showOrdersListPanel = true;
      this.showOrderProductsPanel = true;
    }
  }



}
