import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DashboardCemeterysComponent } from './dashboard-cemeterys/dashboard-cemeterys.component';
import { DashboardSectorsComponent } from './dashboard-sectors/dashboard-sectors.component';
import { DashboardPlacesComponent } from './dashboard-places/dashboard-places.component';
import { DashboardBurialsComponent } from './dashboard-burials/dashboard-burials.component';
import { CemeterysDetailsComponent } from './cemeterys-details/cemeterys-details.component';
import { PlacesDetailsComponent } from './places-details/places-details.component';
import { SectorsDetailsComponent } from './sectors-details/sectors-details.component';
import { BurialsDetailsComponent } from './burials-details/burials-details.component';
import { SearchComponent } from './search/search.component';
import { SortingComponent } from './sorting/sorting.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './/app-routing.module';
import { CemeteryPhotoComponent } from './cemetery-photo/cemetery-photo.component';
import { SectorPhotoComponent } from './sector-photo/sector-photo.component';
import { PlacePhotoComponent } from './place-photo/place-photo.component';
import { BurialPhotoComponent } from './burial-photo/burial-photo.component';
import { BottombarComponent } from './bottombar/bottombar.component';
import { ChangeBurialComponent } from './change-burial/change-burial.component';
import { ChangePlaceComponent } from './change-place/change-place.component';
import { ChangeSectorComponent } from './change-sector/change-sector.component';
import { ChangeCemeteryComponent } from './change-cemetery/change-cemetery.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddCemeteryComponent } from './add-cemetery/add-cemetery.component';

//// ANGULAR MATERIAL////
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
//// ANGULAR MATERIAL END////

import { AddSwitchComponent } from './add-switch/add-switch.component';
import { AddSectorComponent } from './add-sector/add-sector.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AddBurialComponent } from './add-burial/add-burial.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardCemeterysComponent,
    DashboardSectorsComponent,
    DashboardPlacesComponent,
    DashboardBurialsComponent,
    CemeterysDetailsComponent,
    PlacesDetailsComponent,
    SectorsDetailsComponent,
    BurialsDetailsComponent,
    SearchComponent,
    SortingComponent,
    MessagesComponent,
    CemeteryPhotoComponent,
    SectorPhotoComponent,
    PlacePhotoComponent,
    BurialPhotoComponent,
    BottombarComponent,
    ChangeBurialComponent,
    ChangePlaceComponent,
    ChangeSectorComponent,
    ChangeCemeteryComponent,
    MainPageComponent,
    AddCemeteryComponent,
    AddSwitchComponent,
    AddSectorComponent,
    AddPlaceComponent,
    AddBurialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     MatIconModule,
     MatFormFieldModule,
     MatInputModule,
     MatMenuModule,
     MatDatepickerModule,
     MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
