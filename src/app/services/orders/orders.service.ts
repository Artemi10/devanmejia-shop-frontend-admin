import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  public getAllOrders(): Promise<Object>{
    return this.http.get(environment.apiUrl + "/api/admin/orders").toPromise();
  }

  public updateOrderStatus(id: number, status: string): Promise<Object>{
    return this.http.patch(environment.apiUrl + `/api/admin/orders/${id}/status`, status).toPromise();
  }
}
