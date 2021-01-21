import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StockProduct} from '../../../../../models/stock-product.model';

@Component({
  selector: 'app-stock-product',
  templateUrl: './stock-product.component.html',
  styleUrls: ['./stock-product.component.css']
})
export class StockProductComponent{
  @Input() public stockProduct: StockProduct;
  @Output() public clickDeleteButtonEvent = new EventEmitter();
  @Output() public updateProductEvent = new EventEmitter();
  public isDeleteButtonOpened;
  constructor() {
    this.isDeleteButtonOpened = false;
  }

  public openDeleteButton(): void{
    this.isDeleteButtonOpened = true;
  }
  public closeDeleteButton(): void{
    this.isDeleteButtonOpened = false;
  }

  public clickDeleteButtonListener(): void{
    this.clickDeleteButtonEvent.emit(this.stockProduct);
  }
  public productPriceChangeListener(newPriceValue: number): void{
    this.stockProduct.price = newPriceValue;
    this.updateProductEvent.emit(this.stockProduct);
  }
  public productAmountChangeListener(newAmountValue: number): void{
    this.stockProduct.amount = newAmountValue;
    this.updateProductEvent.emit(this.stockProduct);
  }

}
