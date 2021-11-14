import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAuthGuard } from './doctor-auth.guard';
import { OperationTheaterComponent } from './operation-theater/operation-theater.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';

const routes: Routes = [
  {path:'',component:PharmacyComponent},
  {path:'pharmacy',component:PharmacyComponent},
  {path:'operationTheartor',component:OperationTheaterComponent,canActivate:[DoctorAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
