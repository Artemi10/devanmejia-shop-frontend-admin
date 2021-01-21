import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthorizationService} from '../authorization/authorization.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  constructor(private http: HttpClient, private authorizationService: AuthorizationService) {}

  public getCartProducts(orderId: number): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.get(environment.apiUrl + "/api/admin/cartProduct/" + orderId));
  }
}
