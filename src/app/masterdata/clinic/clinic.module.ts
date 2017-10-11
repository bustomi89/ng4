import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicRoutingModule } from './clinic-routing.module';
import { ClinicComponent } from './clinic.component';

@NgModule({
  imports: [
    CommonModule,
    ClinicRoutingModule
  ],
  declarations: [ClinicComponent]
})
export class ClinicModule { }
