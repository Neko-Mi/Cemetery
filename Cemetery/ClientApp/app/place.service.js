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
import { MessageService } from './message.service';
var PlaceService = /** @class */ (function () {
    function PlaceService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.url = "/api/places";
    }
    PlaceService.prototype.getPlaces = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.addnew('Места захоронений');
        return this.http.get(this.url);
    };
    PlaceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [MessageService,
            HttpClient])
    ], PlaceService);
    return PlaceService;
}());
export { PlaceService };
//# sourceMappingURL=place.service.js.map