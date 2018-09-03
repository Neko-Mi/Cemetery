import { Component, OnInit } from '@angular/core';

import { Burial } from '../burial';
import { BurialService } from '../burial.service';

@Component({
  selector: 'app-dashboard-burials',
  templateUrl: './dashboard-burials.component.html',
  styleUrls: ['./dashboard-burials.component.sass'],
  providers: [BurialService]
})
export class DashboardBurialsComponent implements OnInit {
  
  burials: Burial[];

  selectedBurial: Burial;
  selectedInfo: Burial;
  open: boolean = false;


  constructor(private burialService: BurialService) { }

  ngOnInit() {
    this.getBurials();
  }

  onSelectBurial(burial: Burial): void {
    this.selectedBurial = burial;
  }

  onSelectInfo(burial: Burial): void {
    this.selectedInfo = burial;
    this.open = !this.open;
  }

  onClosed(closed:any) {
      closed == false ? this.open = false : this.open = true;
  }

  getBurials(): void {
    this.burialService.getBurials()
        .subscribe((data: Burial[]) => this.burials = data);
  }

}
