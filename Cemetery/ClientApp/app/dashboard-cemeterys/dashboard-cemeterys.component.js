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
import { CemeteryService } from '../cemetery.service';
var DashboardCemeterysComponent = /** @class */ (function () {
    function DashboardCemeterysComponent(CemeteryService) {
        this.CemeteryService = CemeteryService;
        this.open = false;
        this.open_change = false;
    }
    DashboardCemeterysComponent.prototype.ngOnInit = function () {
        this.getCemeterys();
    };
    DashboardCemeterysComponent.prototype.onSelectCemetery = function (cemetery) {
        this.selectedCemetery = cemetery;
    };
    DashboardCemeterysComponent.prototype.onSelectInfo = function (cemetery) {
        this.selectedInfo = cemetery;
        this.open = !this.open;
    };
    DashboardCemeterysComponent.prototype.onSelectChange = function (cemetery) {
        this.selectedInfo = cemetery;
        this.open_change = !this.open_change;
    };
    DashboardCemeterysComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
        closed == false ? this.open_change = false : this.open_change = true;
    };
    DashboardCemeterysComponent.prototype.getCemeterys = function () {
        var _this = this;
        this.CemeteryService.getCemeterys()
            .subscribe(function (data) { return _this.cemeterys = data; });
    };
    DashboardCemeterysComponent = __decorate([
        Component({
            selector: 'app-dashboard-cemeterys',
            templateUrl: './dashboard-cemeterys.component.html',
            styleUrls: ['./dashboard-cemeterys.component.sass'],
            providers: [CemeteryService]
        }),
        __metadata("design:paramtypes", [CemeteryService])
    ], DashboardCemeterysComponent);
    return DashboardCemeterysComponent;
}());
export { DashboardCemeterysComponent };
//# sourceMappingURL=dashboard-cemeterys.component.js.map