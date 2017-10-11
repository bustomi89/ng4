import {SmartadminModule} from '../shared/smartadmin.module'
import {NgModule} from '@angular/core';

import {routing} from './dashboard.routing';


@NgModule({
  imports: [
    SmartadminModule,
    routing,
  ],
  declarations: [],
  providers: [],
})
export class DashboardModule {

}
