import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KategoriComponent } from 'app/masterdata/kategori/kategori.component';
import { HomeComponent } from 'app/masterdata/kategori/home/home.component';
import { AddComponent } from 'app/masterdata/kategori/add/add.component';
import { EditComponent } from 'app/masterdata/kategori/edit/edit.component';
import { ShowComponent } from 'app/masterdata/kategori/show/show.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"show/:id", component:ShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KategoriRoutingModule { }
