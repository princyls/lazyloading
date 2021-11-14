import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
   chiefDoctor='princy';
  constructor() { }
  doctoravailable(){
    if(this.chiefDoctor == 'princy'){
      return true;
    }
    return false;
  }
}
