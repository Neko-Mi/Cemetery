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
import { BurialService } from '../burial.service';
var DashboardBurialsComponent = /** @class */ (function () {
    function DashboardBurialsComponent(burialService) {
        this.burialService = burialService;
        this.open = false;
    }
    DashboardBurialsComponent.prototype.ngOnInit = function () {
        this.getBurials();
    };
    DashboardBurialsComponent.prototype.onSelectBurial = function (burial) {
        this.selectedBurial = burial;
    };
    DashboardBurialsComponent.prototype.onSelectInfo = function (burial) {
        this.selectedInfo = burial;
        this.open = !this.open;
    };
    DashboardBurialsComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
    };
    DashboardBurialsComponent.prototype.getBurials = function () {
        var _this = this;
        this.burialService.getBurials()
            .subscribe(function (data) { return _this.burials = data; });
    };
    DashboardBurialsComponent = __decorate([
        Component({
            selector: 'app-dashboard-burials',
            templateUrl: './dashboard-burials.component.html',
            styleUrls: ['./dashboard-burials.component.sass'],
            providers: [BurialService]
        }),
        __metadata("design:paramtypes", [BurialService])
    ], DashboardBurialsComponent);
    return DashboardBurialsComponent;
}());
export { DashboardBurialsComponent };
//# sourceMappingURL=dashboard-burials.component.js.map