import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  userType='doctor';
  constructor() { }
  user(){
   if(this.userType == 'doctor'){
     return true;
   }
   return false;
  }
}
