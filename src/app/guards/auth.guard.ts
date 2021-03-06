import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthenticationServiceService } from '../services/authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUser: User = new User;
  role=""

  constructor(private authenticationService: AuthenticationServiceService, private router: Router) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      var iterator = this.currentUser.roles?.values();
     
      
        this.role=iterator?.next()?.value['role']
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
      if (this.currentUser) {
        if (route.data['roles']?.indexOf(this.role) === -1) {
          this.router.navigate(['/401']);
          return false;
        }
        return true;
      }
  
      this.router.navigate(['/login']);
      return true;
    }
}
  
