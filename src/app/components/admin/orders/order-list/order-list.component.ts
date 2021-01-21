import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../../models/order.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent{
  @Input() public orders: Order[];
  @Output() public selectOrderEvent = new EventEmitter();

  constructor() {}

  public selectOrderEventListener(order: Order): void{
    this.selectOrderEvent.emit(order)
  }
  public changeFilterFlagEventListener(filterType: string): void{
    this.orders.filter((order: Order) => order.orderStatus === filterType)
      .forEach((order: Order) => order.show = !order.show);
  }
  public reverseOrderList(): void{
    this.orders.reverse();
  }
}
