var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { PlaceService } from '../place.service';
var DashboardPlacesComponent = /** @class */ (function () {
    function DashboardPlacesComponent(PlaceService) {
        this.PlaceService = PlaceService;
        this.open = false;
    }
    DashboardPlacesComponent.prototype.ngOnInit = function () {
        this.getPlaces();
    };
    DashboardPlacesComponent.prototype.onSelectPlace = function (place) {
        this.selectedPlace = place;
    };
    DashboardPlacesComponent.prototype.onSelectInfo = function (place) {
        this.selectedInfo = place;
        this.open = !this.open;
    };
    DashboardPlacesComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
    };
    DashboardPlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.PlaceService.getPlaces()
            .subscribe(function (places) { return _this.places = places; });
    };
    DashboardPlacesComponent = __decorate([
        Component({
            selector: 'app-dashboard-places',
            templateUrl: './dashboard-places.component.html',
            styleUrls: ['./dashboard-places.component.sass'],
            providers: [PlaceService]
        }),
        __metadata("design:paramtypes", [PlaceService])
    ], DashboardPlacesComponent);
    return DashboardPlacesComponent;
}());
export { DashboardPlacesComponent };
//# sourceMappingURL=dashboard-places.component.js.map