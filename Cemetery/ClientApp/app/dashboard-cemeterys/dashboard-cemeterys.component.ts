import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Cemetery } from '../cemetery';
import { CemeteryService } from '../cemetery.service';


@Component({
    selector: 'app-dashboard-cemeterys',
    templateUrl: './dashboard-cemeterys.component.html',
    styleUrls: ['./dashboard-cemeterys.component.sass'],
    providers: [CemeteryService]
})
export class DashboardCemeterysComponent implements OnInit {

    cemeteries: Cemetery[] = [];

    selectedCemetery: Cemetery;
    selectedInfo: Cemetery;

    open: boolean = false;
    open_change: boolean = false;

    constructor(private CemeteryService: CemeteryService) { }

    ngOnInit() {
        this.getCemeterys();
    }

    onSelectCemetery(cemetery: Cemetery): void {
        this.selectedCemetery = cemetery;
    }

    onSelectInfo(cemetery: Cemetery): void {
        this.selectedInfo = cemetery;
        this.open = !this.open;
    }

    onSelectChange(cemetery: Cemetery): void {
        this.selectedInfo = cemetery;
        this.open_change = !this.open_change;
    }

    onClosed(closed: any) {
        closed == false ? this.open = false : this.open = true;
        closed == false ? this.open_change = false : this.open_change = true;
    }

    getCemeterys(): void {
        this.CemeteryService.getCemeterys()
            .subscribe((data: Cemetery[]) => this.cemeteries = data);
    }

}