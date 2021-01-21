import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthorizationService} from '../authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private authorizationService: AuthorizationService) { }

  public getAllOrders(): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.get(environment.apiUrl + "/api/admin/orders"));
  }

  public updateOrderStatus(id: number, status: string): Promise<Object>{
    return this.authorizationService
      .sendRefreshTokensRequestInterceptor(this.http.patch(environment.apiUrl + `/api/admin/orders/${id}/status`, status));
  }
}
