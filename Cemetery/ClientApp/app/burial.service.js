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
// import { BURIALS } from './mock-burial';
import { MessageService } from './message.service';
var BurialService = /** @class */ (function () {
    function BurialService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
        this.url = "/api/burials";
    }
    BurialService.prototype.getBurials = function () {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.addnew('Захоронения');
        return this.http.get(this.url);
    };
    // getBurial(id: number): Observable<Burial> {
    //   // TODO: send the message _after_ fetching the hero
    //   //this.messageService.addnew(`BurialService: fetched Burial id=${id}`);
    //   return of(BURIALS.find(burial => burial.Id === id));
    // }
    BurialService.prototype.createBurial = function (person) {
        return this.http.post(this.url, person);
    };
    BurialService.prototype.updateBurial = function (person) {
        return this.http.put(this.url, person);
    };
    BurialService.prototype.deleteBurial = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    BurialService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [MessageService,
            HttpClient])
    ], BurialService);
    return BurialService;
}());
export { BurialService };
//# sourceMappingURL=burial.service.js.map