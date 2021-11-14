import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { OperationTheaterComponent } from './operation-theater/operation-theater.component';


@NgModule({
  declarations: [
    PharmacyComponent,
    OperationTheaterComponent
  ],
  imports: [
    CommonModule,
    HospitalRoutingModule
  ]
})
export class HospitalModule { }
