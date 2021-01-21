import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockProduct} from '../../models/stock-product.model';
import {environment} from '../../../environments/environment';
import {AuthorizationService} from '../authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class StockProductService {

  constructor(private http:HttpClient, private authorizationService: AuthorizationService) { }

  public getStockProducts(): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.get(environment.apiUrl + '/api/admin/stockProducts'));
  }
  public deleteStockProduct(productName: string): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.delete(environment.apiUrl + '/api/admin/stockProduct/' + productName));
  }
  public updateStockProduct(stockProduct: StockProduct): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.patch(environment.apiUrl + '/api/admin/stockProduct', stockProduct));
  }
  public addNewStockProduct(product): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.post(environment.apiUrl + '/api/admin/stockProduct', product));
  }
}
