import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, mergeMap} from 'rxjs/operators';
import {Token} from '../../models/token.model';
import {AuthenticationService} from '../authentication/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private http:HttpClient, private authenticationService: AuthenticationService) { }

  public sendLogInUserRequest(loginForm): Promise<Object>{
    return this.http.post(environment.apiUrl + '/api/auth/logIn/userAdmin', loginForm).toPromise();
  }

  public sendRefreshTokensRequestInterceptor(request: Observable<Object>): Promise<Object>{
    if(this.authenticationService.isAccessTokenExpired()){
      return this.http.post(environment.apiUrl + "/api/auth/refresh", this.authenticationService.getRefreshToken())
        .pipe(mergeMap((tokens: Token) => this.setNewTokensValue(request, tokens)),
          catchError((error) => {
            if(error.status === 403){
              this.authenticationService.deleteRefreshToken();
              this.authenticationService.deleteAccessToken();
              window.location.replace('/logIn')
              return error;
            }
          })).toPromise()
    }
    else{
      return request.toPromise();
    }
  }

  public setNewTokensValue(request: Observable<Object>, tokens: Token): Observable<Object>{
    this.authenticationService.setAccessToken(tokens.accessToken);
    this.authenticationService.setRefreshToken(tokens.refreshToken);
    return request;
  }


}

