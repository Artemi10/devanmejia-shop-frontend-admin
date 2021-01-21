import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from '../../../../../models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() public order: Order;
  @Output() public selectOrderEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public selectOrderListener(): void{
    this.selectOrderEvent.emit(this.order)
  }

}
