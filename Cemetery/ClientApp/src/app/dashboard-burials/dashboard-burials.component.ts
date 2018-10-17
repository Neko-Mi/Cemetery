import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material';

import { Burial } from '../burial';
import { BurialService } from '../burial.service';

@Component({
    selector: 'app-dashboard-burials',
    templateUrl: './dashboard-burials.component.html',
    styleUrls: ['./dashboard-burials.component.sass'],
    providers: [BurialService]
})
export class DashboardBurialsComponent implements OnInit {

    pageEvent: PageEvent;
    length = 100;
    pageSize = 30;

    burials: Burial[] = [];

    selectedBurial: Burial;

    open_detail = false;
    open_change = false;

    constructor(private burialService: BurialService) { }

    ngOnInit() {
        this.getBurials();
    }

    onSelectBurial(burial: Burial): void {
        this.selectedBurial = burial;
    }

    onSelectInfo(burial: Burial): void {
        this.selectedBurial = burial;
        this.open_detail = !this.open_detail;
    }

    onSelectChange(burial: Burial): void {
        this.selectedBurial = burial;
        this.open_change = !this.open_change;
    }

    onClosedDetails() {
        this.open_detail = !this.open_detail;
    }

    onClosedChange() {
        this.open_change = !this.open_change;
    }

    getBurials(): void {
        this.burialService.getBurials()
            .subscribe((data: Burial[]) => {this.burials = data; console.log(data); });
        // console.log(this.burials);
    }

}
