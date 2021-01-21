import { Component} from '@angular/core';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(public authenticationService :AuthenticationService, private router: Router) { }

  public isExisted(): boolean{
    return (this.authenticationService.isAccessTokenExisted() &&!this.authenticationService.isAccessTokenExpired() &&this.authenticationService.getUserRole() === "ROLE_CLIENT")
      || this.authenticationService.isRefreshTokenExisted()
  }


  public logOut(): void{
    this.authenticationService.deleteRefreshToken();
    this.authenticationService.deleteAccessToken();
    window.location.replace("/");
  }

  public isCurrentPage(url: string): boolean{
    return url === this.router.url;
  }


}
