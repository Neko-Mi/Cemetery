var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MENUS } from './mock-menu';
import { MessageService } from './message.service';
var SidebarService = /** @class */ (function () {
    function SidebarService(messageService) {
        this.messageService = messageService;
    }
    SidebarService.prototype.getMenus = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.add('SectorService: fetched sectors');
        return of(MENUS);
    };
    SidebarService.prototype.getSector = function (id) {
        // TODO: send the message _after_ fetching the hero
        this.messageService.add("SectorService: fetched Sector id=" + id);
        return of(MENUS.find(function (menu) { return menu.id === id; }));
    };
    SidebarService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [MessageService])
    ], SidebarService);
    return SidebarService;
}());
export { SidebarService };
//# sourceMappingURL=sector.service.1.js.map