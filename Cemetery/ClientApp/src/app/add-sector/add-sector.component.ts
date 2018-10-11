import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';
import { SectorService } from '../sector.service';
import { CemeteryService } from '../cemetery.service';
import { Cemetery } from '../cemetery';
@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.sass']
})
export class AddSectorComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  cemeteries: Cemetery[] = [];

  close: boolean = !open;
  number:number = 0;
  selectedPhoto: boolean = false;
  PhotoOpen:boolean = this.selectedPhoto;

  open_cemetery: boolean = false;
  open_place: boolean = false;
  open_burial: boolean = false;

  sectornochange: Sector = new Sector(); // данные вводимого пользователя

  sector: Sector = new Sector(); // данные вводимого пользователя
  // cemetery: Cemetery = new Cemetery(); // данные вводимого пользователя

  // IdForCemetery: string ;
  
      
  //receivedSector: Sector; // полученный пользователь
  done: boolean = false;
  

  save(sector: Sector) {
    // 'post' using for creating new object in database
      // 
    // sector.cemeteryId = parseInt(this.IdForCemetery); 
    // console.log(this.IdForCemetery + " " + sector.sectorName);
    this.sectorService.createSector(sector)
      .subscribe(
        (data: Sector) => { this.sector = data; this.done = true; },
        error => console.log(error)
      );
    this.onSelectClose();
  }



  onSelectClose(): void {
    this.sector = this.sectornochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if(this.selectedPhoto == true)
      this.selectedPhoto = false;
    }

    selectableCemeteries(): void {
        this.cemeteryService.getCemeterys()
            .subscribe((data: Cemetery[]) => this.cemeteries = data);
          

    }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1) 
  //     this.number = this.sector.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.sector.imgs.length) 
  //     this.number = 0;
  // }
  
  onSelectPhoto(): void {
    this.selectedPhoto =  !this.selectedPhoto;
    //this.open = !this.open;  
  } 

  onClosed() {
    this.open = !this.open;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }

  onCemetery(): void {
    this.open_cemetery =  !this.open_cemetery;
    this.open = !this.open;  
  }

  onPlace(): void {
    this.open_place =  !this.open_place;
    this.open = !this.open;  
  }

  onBurial(): void {
    this.open_burial =  !this.open_burial;
    this.open = !this.open;  
  }

    constructor(private sectorService: SectorService,
        private cemeteryService: CemeteryService) { }

    ngOnInit() {
        this.selectableCemeteries();
    }

}
