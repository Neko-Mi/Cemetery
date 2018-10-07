import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardCemeterysComponent } from './dashboard-cemeterys/dashboard-cemeterys.component';
import { DashboardSectorsComponent } from './dashboard-sectors/dashboard-sectors.component';
import { DashboardPlacesComponent } from './dashboard-places/dashboard-places.component';
import { DashboardBurialsComponent } from './dashboard-burials/dashboard-burials.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainPageComponent },
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
