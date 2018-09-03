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
var ChangeCemeteryComponent = /** @class */ (function () {
    function ChangeCemeteryComponent() {
        this.onClose = new EventEmitter();
        this.close = !open;
        this.selectedPhoto = false;
    }
    ChangeCemeteryComponent.prototype.onSelectClose = function () {
        this.open = !this.open;
        this.onClose.emit(this.open);
    };
    ChangeCemeteryComponent.prototype.onSelectPhoto = function () {
        this.selectedPhoto = !this.selectedPhoto;
        this.open = !this.open;
    };
    ChangeCemeteryComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
        this.selectedPhoto = !this.selectedPhoto;
        this.onClose.emit(this.open);
    };
    ChangeCemeteryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Cemetery)
    ], ChangeCemeteryComponent.prototype, "cemetery", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ChangeCemeteryComponent.prototype, "open", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ChangeCemeteryComponent.prototype, "onClose", void 0);
    ChangeCemeteryComponent = __decorate([
        Component({
            selector: 'app-change-cemetery',
            templateUrl: './change-cemetery.component.html',
            styleUrls: ['./change-cemetery.component.sass']
        }),
        __metadata("design:paramtypes", [])
    ], ChangeCemeteryComponent);
    return ChangeCemeteryComponent;
}());
export { ChangeCemeteryComponent };
//# sourceMappingURL=change-cemetery.component.js.map