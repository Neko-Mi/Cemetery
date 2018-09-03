var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Sector } from '../sector';
var SectorPhotoComponent = /** @class */ (function () {
    function SectorPhotoComponent() {
        this.onClose = new EventEmitter();
        this.onInfo = new EventEmitter();
        this.close = !open;
        this.number = 0;
    }
    SectorPhotoComponent.prototype.onSelectClose = function () {
        this.number = 0;
        this.open = !this.open;
        this.onClose.emit(this.open);
    };
    SectorPhotoComponent.prototype.onSelectInfo = function () {
        this.onInfo.emit(this.open);
        this.open = !this.open;
    };
    SectorPhotoComponent.prototype.onBefore = function () {
        this.number--;
        if (this.number == -1)
            this.number = this.sector.imgs.length - 1;
    };
    SectorPhotoComponent.prototype.onNext = function () {
        this.number++;
        if (this.number == this.sector.imgs.length)
            this.number = 0;
    };
    SectorPhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Sector)
    ], SectorPhotoComponent.prototype, "sector", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], SectorPhotoComponent.prototype, "open", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SectorPhotoComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SectorPhotoComponent.prototype, "onInfo", void 0);
    SectorPhotoComponent = __decorate([
        Component({
            selector: 'app-sector-photo',
            templateUrl: './sector-photo.component.html',
            styleUrls: ['./sector-photo.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], SectorPhotoComponent);
    return SectorPhotoComponent;
}());
export { SectorPhotoComponent };
//# sourceMappingURL=sector-photo.component.js.map