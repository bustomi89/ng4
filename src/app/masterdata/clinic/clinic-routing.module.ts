import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicComponent } from 'app/masterdata/clinic/clinic.component';

const routes: Routes = [{
    path: '',
    component: ClinicComponent,
    data: {pageTitle: 'Clinic'},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicRoutingModule { }
