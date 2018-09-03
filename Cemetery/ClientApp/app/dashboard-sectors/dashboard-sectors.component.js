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
import { SectorService } from '../sector.service';
//import { selectedMenu } from '../sidebar/sidebar.component';
var DashboardSectorsComponent = /** @class */ (function () {
    function DashboardSectorsComponent(SectorService) {
        this.SectorService = SectorService;
        this.open = false;
    }
    DashboardSectorsComponent.prototype.ngOnInit = function () {
        this.getSectors();
    };
    DashboardSectorsComponent.prototype.onSelectSector = function (sector) {
        this.selectedSector = sector;
    };
    DashboardSectorsComponent.prototype.onSelectInfo = function (sector) {
        this.selectedInfo = sector;
        this.open = !this.open;
    };
    DashboardSectorsComponent.prototype.onClosed = function (closed) {
        closed == false ? this.open = false : this.open = true;
    };
    DashboardSectorsComponent.prototype.getSectors = function () {
        var _this = this;
        this.SectorService.getSectors()
            .subscribe(function (data) { return _this.sectors = data; });
    };
    DashboardSectorsComponent = __decorate([
        Component({
            selector: 'app-dashboard-sectors',
            templateUrl: './dashboard-sectors.component.html',
            styleUrls: ['./dashboard-sectors.component.sass'],
            providers: [SectorService]
        }),
        __metadata("design:paramtypes", [SectorService])
    ], DashboardSectorsComponent);
    return DashboardSectorsComponent;
}());
export { DashboardSectorsComponent };
//# sourceMappingURL=dashboard-sectors.component.js.map