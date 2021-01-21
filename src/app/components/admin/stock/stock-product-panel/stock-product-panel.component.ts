import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {StockProductService} from '../../../../services/stock-product/stock-product.service';
import {StockProduct} from '../../../../models/stock-product.model';

@Component({
  selector: 'app-stock-product-panel',
  templateUrl: './stock-product-panel.component.html',
  styleUrls: ['./stock-product-panel.component.css']
})
export class StockProductPanelComponent implements OnChanges{
  public stockProducts: StockProduct[] = [];
  public errorMessage: string = '';
  @Input() public updateProductsFlag: boolean;

  constructor(private stockProductService: StockProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.stockProductService.getStockProducts()
      .then((data: StockProduct[]) => this.stockProducts = data);
  }

  public updateProduct(stockProduct: StockProduct): void{
    this.stockProductService.updateStockProduct(stockProduct)
      .catch((error) => this.errorMessage = error.text)
  }
  public deleteProductFromStock(stockProduct: StockProduct): void{
    this.stockProductService.deleteStockProduct(stockProduct.productName)
      .then(() => {
        let index: number = this.stockProducts.indexOf(stockProduct);
        this.stockProducts.splice(index, 1);
      });
  }


}
