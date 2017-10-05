import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad  {


  constructor(private authService: AuthService) { }

  checkAuth(url) {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      localStorage.setItem('returnUrl', url);
      window.location.replace(this.authService.authenticationUrl);
      return false;
    }
  }

  canActivate(params) {
    return this.checkAuth(params._routerState.url);
  }

  canLoad(params) {
    return this.checkAuth(params.path);
  }
}
