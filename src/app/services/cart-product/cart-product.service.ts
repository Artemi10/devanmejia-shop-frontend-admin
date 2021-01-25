import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor(private http: HttpClient) {}

  public getCartProducts(orderId: number): Promise<Object>{
    return this.http.get(environment.apiUrl + "/api/admin/cartProduct/" + orderId).toPromise();
  }
}
