import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private auth:AuthServiceService,private router:Router){}
  canActivate(){
    if(this.auth.isLoggedIn()){
        return true;
    }
    alert("Sign in please")
    this.router.navigate(['admin'])
    return false;
  }
  
  
}
