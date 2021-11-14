import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// baseUrl='https://jsonplaceholder.typicode.com/users';
userName='princy';
  constructor(private httpClient:HttpClient) { }
  isLogedIn(){
    if(this.userName == 'princy'){

      return true;
    }
    return false;
  }

}
