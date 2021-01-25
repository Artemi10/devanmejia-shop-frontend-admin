import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockProduct} from '../../models/stock-product.model';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StockProductService {

  constructor(private http:HttpClient) { }

  public getStockProducts(): Promise<Object>{
    return this.http.get(environment.apiUrl + '/api/admin/stockProducts').toPromise();
  }
  public deleteStockProduct(productName: string): Promise<Object>{
    return this.http.delete(environment.apiUrl + '/api/admin/stockProduct/' + productName).toPromise();
  }
  public updateStockProduct(stockProduct: StockProduct): Promise<Object>{
    return this.http.patch(environment.apiUrl + '/api/admin/stockProduct', stockProduct).toPromise();
  }
  public addNewStockProduct(product): Promise<Object>{
    return this.http.post(environment.apiUrl + '/api/admin/stockProduct', product).toPromise();
  }
}
