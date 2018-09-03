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
import { Cemetery } from '../cemetery';
var CemeterysDetailsComponent = /** @class */ (function () {
    function CemeterysDetailsComponent() {
        this.onClose = new EventEmitter();
        this.close = !open;
        this.selectedPhoto = false;
    }
    CemeterysDetailsComponent.prototype.onSelectClose = function () {
        this.open = !this.open;
        this.onClose.emit(this.open);
    };
    CemeterysDetailsComponent.prototype.onSelectPhoto = function () {
        this.selectedPhoto = !this.selectedPhoto;
        this.open = !this.open;
    };
    CemeterysDetailsComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
        this.selectedPhoto = !this.selectedPhoto;
        this.onClose.emit(this.open);
    };
    CemeterysDetailsComponent.prototype.onInfo = function (info) {
        info == false ? this.open = false : this.open = true;
        this.selectedPhoto = !this.selectedPhoto;
    };
    CemeterysDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Cemetery)
    ], CemeterysDetailsComponent.prototype, "cemetery", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], CemeterysDetailsComponent.prototype, "open", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], CemeterysDetailsComponent.prototype, "onClose", void 0);
    CemeterysDetailsComponent = __decorate([
        Component({
            selector: 'app-cemeterys-details',
            templateUrl: './cemeterys-details.component.html',
            styleUrls: ['./cemeterys-details.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], CemeterysDetailsComponent);
    return CemeterysDetailsComponent;
}());
export { CemeterysDetailsComponent };
//# sourceMappingURL=cemeterys-details.component.js.map