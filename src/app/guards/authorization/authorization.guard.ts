import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private router:Router,private authenticationService :AuthenticationService) {}

  canActivate():boolean {
    if(!(this.authenticationService.isAccessTokenExisted() && !this.authenticationService.isAccessTokenExpired() && this.authenticationService.getUserRole() === 'ROLE_ADMIN')
      && !this.authenticationService.isRefreshTokenExisted()) {
      return true;
    }
    else {
      this.router.navigate(['/'])
      return false;
    }
  }

}
