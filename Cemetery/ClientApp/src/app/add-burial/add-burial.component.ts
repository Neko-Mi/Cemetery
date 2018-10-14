import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Burial } from '../burial';
import { BurialService } from '../burial.service';
import { Place } from '../place';
import { PlaceService } from '../place.service';
import { CemeteryService } from '../cemetery.service';
import { Cemetery } from '../cemetery';
import { Sector } from '../sector';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-add-burial',
  templateUrl: './add-burial.component.html',
  styleUrls: ['./add-burial.component.sass']
})
export class AddBurialComponent implements OnInit {


  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  burials: Burial[] = [];

  close: boolean = !open;
  number = 0;
  selectedPhoto = false;
  PhotoOpen: boolean = this.selectedPhoto;
  burialnochange: Burial = new Burial(); // данные вводимого пользователя

  burial: Burial = new Burial(); // данные вводимого пользователя

  done = false;

  cemeteries: Cemetery[] = []; // для списка кладбищ
  sectors: Sector[] = []; // для списка кладбищ
  places: Place[] = []; // для списка мест

  idForCemetery: number;
  idForSector: number;


  save(burial: Burial) {
    // 'post' using for creating new object in database
    this.burialService.createBurial(burial)
      .subscribe(
        (data: Burial) => { this.burial = data; this.done = true; },
        error => console.log(error)
      );
// ${this.places[this.burial.placeId].number}
    console.log(`placeId: ${this.burial.placeId}, 
     surname: ${this.burial.surname}, name: ${this.burial.name},
                 patronymic: ${this.burial.patronymic}`);
    this.onSelectClose();
  }

  onSelectClose(): void {
    this.burial = this.burialnochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if (this.selectedPhoto === true) {
      this.selectedPhoto = false;
    }
  }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1)
  //     this.number = this.burial.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.burial.imgs.length)
  //     this.number = 0;
  // }

  onSelectPhoto(): void {
    this.selectedPhoto =  !this.selectedPhoto;
    // this.open = !this.open;
  }

  onClosed() {
    this.open = !this.open;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }


  onCemetery() {
    console.log(`выбрано кладбище: ${this.idForCemetery}, ${this.cemeteries[this.idForCemetery - 1].name} `);

    this.sectorService.getSectors()
      .subscribe((data: Sector[]) => this.sectors = data.filter(data1 => data1.cemeteryId === this.idForCemetery));
    console.log(this.sectors);


  }

  onSector() {

    console.log(`выбран сектор: ${this.idForSector} `);
    // console.log(`выбран сектор: ${this.idForSector}, ${this.sectors[this.idForSector - 1].sectorName} `);

    this.placeService.getPlaces()
      .subscribe((data: Place[]) => this.places = data.filter(data1 => data1.sectorId === this.idForSector));
    console.log(this.places);


  }

  selectableCemeteries(): void {// создание списка кладбищ
    this.cemeteryService.getCemeterys()
        .subscribe((data: Cemetery[]) => this.cemeteries = data);
  }



  constructor(    private burialService: BurialService,
    private placeService: PlaceService,
    private sectorService: SectorService,
    private cemeteryService: CemeteryService) { }

  ngOnInit() {
    this.selectableCemeteries();
  }

}
