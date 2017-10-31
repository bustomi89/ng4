import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KategoriRoutingModule } from './kategori-routing.module';
import { KategoriComponent } from './kategori.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { SmartadminModule } from 'app/shared/smartadmin.module';
import { SmartadminDatatableModule } from 'app/shared/ui/datatable/smartadmin-datatable.module';
import { CategoriService } from 'app/masterdata/kategori/kategori.service';

@NgModule({
  imports: [
    CommonModule,
    KategoriRoutingModule,
    SmartadminModule,
    SmartadminDatatableModule
  ],
  declarations: [KategoriComponent, AddComponent, EditComponent, ShowComponent, HomeComponent],
  providers: [CategoriService],
})
export class KategoriModule { }
