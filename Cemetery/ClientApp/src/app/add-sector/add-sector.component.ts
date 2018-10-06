import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';
import { SectorService }  from '../sector.service';
@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.sass']
})
export class AddSectorComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  cemeteries: Sector[] = [];

  close: boolean = !open;
  number:number = 0;
  selectedPhoto: boolean = false;
  PhotoOpen:boolean = this.selectedPhoto;
  sectornochange: Sector = new Sector(); // данные вводимого пользователя

  sector: Sector = new Sector(); // данные вводимого пользователя
      
  //receivedSector: Sector; // полученный пользователь
  done: boolean = false;
  

  save(sector: Sector) {
    // 'post' using for creating new object in database
    // 
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

  constructor( private sectorService: SectorService) { }

  ngOnInit() {
  }

}
