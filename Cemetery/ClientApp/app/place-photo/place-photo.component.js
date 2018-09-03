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
import { Place } from '../place';
var PlacePhotoComponent = /** @class */ (function () {
    function PlacePhotoComponent() {
        this.onClose = new EventEmitter();
        this.onInfo = new EventEmitter();
        this.close = !open;
        this.number = 0;
    }
    PlacePhotoComponent.prototype.onSelectClose = function () {
        this.number = 0;
        this.open = !this.open;
        this.onClose.emit(this.open);
    };
    PlacePhotoComponent.prototype.onSelectInfo = function () {
        this.onInfo.emit(this.open);
        this.open = !this.open;
    };
    PlacePhotoComponent.prototype.onBefore = function () {
        this.number--;
        if (this.number == -1)
            this.number = this.place.imgs.length - 1;
    };
    PlacePhotoComponent.prototype.onNext = function () {
        this.number++;
        if (this.number == this.place.imgs.length)
            this.number = 0;
    };
    PlacePhotoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Place)
    ], PlacePhotoComponent.prototype, "place", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], PlacePhotoComponent.prototype, "open", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlacePhotoComponent.prototype, "onClose", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], PlacePhotoComponent.prototype, "onInfo", void 0);
    PlacePhotoComponent = __decorate([
        Component({
            selector: 'app-place-photo',
            templateUrl: './place-photo.component.html',
            styleUrls: ['./place-photo.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], PlacePhotoComponent);
    return PlacePhotoComponent;
}());
export { PlacePhotoComponent };
//# sourceMappingURL=place-photo.component.js.map