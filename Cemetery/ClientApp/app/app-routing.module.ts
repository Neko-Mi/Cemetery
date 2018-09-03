import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardCemeterysComponent }   from './dashboard-cemeterys/dashboard-cemeterys.component';
import { DashboardSectorsComponent }      from './dashboard-sectors/dashboard-sectors.component';
import { DashboardPlacesComponent }      from './dashboard-places/dashboard-places.component';
import { DashboardBurialsComponent }      from './dashboard-burials/dashboard-burials.component';


const routes: Routes = [
  { path: '', redirectTo: '/cemeterys', pathMatch: 'full' },
  { path: 'cemeterys', component: DashboardCemeterysComponent },
  { path: 'sectors', component: DashboardSectorsComponent },
  { path: 'places', component: DashboardPlacesComponent },
  { path: 'burials', component: DashboardBurialsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
