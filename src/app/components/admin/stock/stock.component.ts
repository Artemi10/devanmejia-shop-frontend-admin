import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent{
  public updateProductsFlag: boolean = false;
  constructor() { }

  public addProductEventListener(): void{
    this.updateProductsFlag = !this.updateProductsFlag;
  }

}
