import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-dashboard-sectors',
  templateUrl: './dashboard-sectors.component.html',
  styleUrls: ['./dashboard-sectors.component.sass'],
  providers: [SectorService]
})
export class DashboardSectorsComponent implements OnInit {

    sectors: Sector[];

    selectedSector: Sector;
    selectedInfo: Sector;

    open: boolean = false;
    open_change: boolean = false;

    constructor(private SectorService: SectorService) { }

    ngOnInit() {
        this.getSectors();
    }
    
    onSelectSector(sector: Sector): void {
        this.selectedSector = sector;
    }

    onSelectInfo(sector: Sector): void {
        this.selectedInfo = sector;
        this.open = !this.open;
    }

    onSelectChange(sector: Sector): void {
        this.selectedInfo = sector;
        this.open_change = !this.open_change;
    }

    onClosed(closed:any) {
        closed == false ? this.open = false : this.open = true;
        closed == false ? this.open_change = false : this.open_change = true;
    }

    getSectors(): void {
        this.SectorService.getSectors()
            .subscribe((data: Sector[]) => this.sectors = data);
    }
}
