import { Component} from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent{
  public updateProductsFlag: boolean = false;
  public showNewProductPanel: boolean = true;
  public showStockProductsPanel: boolean = true;
  constructor() { }

  public addProductEventListener(): void{
    this.updateProductsFlag = !this.updateProductsFlag;
  }

  public clickStockProductsButtonEventListener(){
    this.showStockProductsPanel = !this.showStockProductsPanel;
  }
  public clickNewProductButtonEventListener(){
    this.showNewProductPanel = !this.showNewProductPanel;
  }
  public onResize(event: any){
    if(event.target.innerWidth >= 576){
      this.showNewProductPanel = true;
      this.showStockProductsPanel = true;
    }
  }

}
