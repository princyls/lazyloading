import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthGuard implements CanActivate {
  constructor(private doctorService:DoctorService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.doctorService.doctoravailable()){
        return true;
      }
      alert('userName and password incorrect');
    return false;
  }
  
}
