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
import { HttpClient } from '@angular/common/http';
//import { CEMETERYS } from './mock-cemetery';
import { MessageService } from './message.service';
var CemeteryService = /** @class */ (function () {
    function CemeteryService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.url = "/api/cemeteries";
    }
    CemeteryService.prototype.getCemeterys = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.addnew('Кладбища');
        return this.http.get(this.url);
    };
    //getCemetery(id: number): Observable<Cemetery> {
    //    // TODO: send the message _after_ fetching the hero
    //    //this.messageService.addnew(`CemeteryService: fetched Cemetery id=${id}`);
    //    return of(CEMETERYS.find(cemetery => cemetery.id === id));
    //}
    CemeteryService.prototype.createCemetery = function (cem) {
        return this.http.post(this.url, cem);
    };
    CemeteryService.prototype.updateCemetery = function (cem) {
        return this.http.put(this.url, cem);
    };
    CemeteryService.prototype.deleteCemetery = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    CemeteryService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [MessageService,
            HttpClient])
    ], CemeteryService);
    return CemeteryService;
}());
export { CemeteryService };
//# sourceMappingURL=cemetery.service.js.map