import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private authService:AuthService){}
  canActivate(){
    if(this.authService.isLogedIn()){
      return true;
    }
    alert('permission denied');
    this.route.navigate(['/home']);
    return false;
  }
  
}
