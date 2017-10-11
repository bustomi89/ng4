import {ModuleWithProviders} from "@angular/core"
import {Routes, RouterModule} from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'clinic', pathMatch: 'full'
  },
  {
    path: 'clinic',
    loadChildren:'./clinic/clinic.module#ClinicModule',
  }
  //,
  // {
  //   path: 'category',
  //   loadChildren:'./category/category.module#CategoryModule',
     
  // },
  // {
  //   path: 'docter',
  //   loadChildren:'./docter/docter.module#DocterModule',
     
  // },
  // {
  //   path: 'customer',
  //   loadChildren:'./customer/customer.module#CustomerModule',
     
  // },
  // {
  //   path: 'pets',
  //   loadChildren:'./pets/pets.module#PetsModule',
     
  // }
];

export const routing = RouterModule.forChild(routes);
