var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                ChangeCemeteryComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                HttpClientModule
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map