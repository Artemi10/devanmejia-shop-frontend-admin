import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
export const TOKEN_NAME: string = 'jwt_text';

export class AuthHeaderInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.url!='http://localhost:8080/logIn') {
      let clonedRequest = req.clone({headers: req.headers.set('Authorization', 'Bearer_' + localStorage.getItem(TOKEN_NAME)).set('Content-Type', 'application/json')});
      return next.handle(clonedRequest);
    }
    return next.handle(req);

  }

}
