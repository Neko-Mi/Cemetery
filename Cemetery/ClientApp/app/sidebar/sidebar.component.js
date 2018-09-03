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
import { MENUS } from '../mock-menu';
import { SidebarService } from '../sidebar.service';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(SidebarService) {
        this.SidebarService = SidebarService;
        this.menus = MENUS;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getMenus();
    };
    SidebarComponent.prototype.onSelect = function (menu) {
        this.selectedMenu = menu;
    };
    SidebarComponent.prototype.getMenus = function () {
        var _this = this;
        this.SidebarService.getMenus()
            .subscribe(function (menus) { return _this.menus = menus; });
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.sass']
        }),
        __metadata("design:paramtypes", [SidebarService])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map