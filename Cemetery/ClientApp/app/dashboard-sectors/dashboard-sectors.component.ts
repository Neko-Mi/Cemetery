import { Component, OnInit } from '@angular/core';

import { Sector } from '../sector';
import { SectorService } from '../sector.service';
//import { selectedMenu } from '../sidebar/sidebar.component';

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

  onClosed(closed:any) {
    closed == false ? this.open = false : this.open = true;
  }

  getSectors(): void {
    this.SectorService.getSectors()
        .subscribe((data: Sector[]) => this.sectors = data);
  }
}
