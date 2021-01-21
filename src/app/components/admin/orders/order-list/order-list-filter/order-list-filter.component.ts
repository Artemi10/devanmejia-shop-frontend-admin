import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-order-list-filter',
  templateUrl: './order-list-filter.component.html',
  styleUrls: ['./order-list-filter.component.css']
})
export class OrderListFilterComponent {
  @Output() public changeFilterFlagEvent = new EventEmitter();
  @Output() public clickReverseButtonEvent = new EventEmitter();
  constructor() { }

  public changeOrderedFlagEventListener(filterType: string): void{
    this.changeFilterFlagEvent.emit(filterType);
  }
  public clickReverseButtonListener(): void{
    this.clickReverseButtonEvent.emit();
  }
}
