import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient, private authenticationService: AuthenticationService) { }

  public sendLogInUserRequest(loginForm): Promise<Object>{
    return this.http.post(environment.apiUrl + '/api/auth/logIn/userAdmin', loginForm).toPromise();
  }

  public sendRefreshTokensRequest(): Observable<Object>{
    return this.http.post(environment.apiUrl + "/api/auth/refresh", this.authenticationService.getRefreshToken());
  }



}

