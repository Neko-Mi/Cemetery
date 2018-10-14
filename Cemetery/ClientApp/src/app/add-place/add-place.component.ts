import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



import { Place } from '../place';
import { PlaceService } from '../place.service';
import { CemeteryService } from '../cemetery.service';
import { Cemetery } from '../cemetery';
import { Sector } from '../sector';
import { SectorService } from '../sector.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  cemeteries: Cemetery[] = []; // для списка кладбищ
  sectors: Sector[] = []; // для списка кладбищ

  close: boolean = !open;
  number = 0;
  selectedPhoto = false;
  PhotoOpen: boolean = this.selectedPhoto;
  placenochange: Place = new Place(); // данные вводимого пользователя


  idForCemetery: number;


  place: Place = new Place(); // данные вводимого пользователя

  done = false;

  save(place: Place) {// отправка запроса на создание места
    // 'post' using for creating new object in database
    // place.cemeteryId = this.idForCemetery;
    // console.log(`cemeteryId: ${place.cemeteryId}, sectorId: ${place.sectorId}, number: ${place.number} `);
    // console.log(`cemeteryId, sectorId: ${place.sectorId}, number: ${place.number} `);
    this.placeService.createPlace(place)
      .subscribe(
        (data: Place) => { this.place = data; this.done = true; },
        error => console.log(error)
      );
    console.log(`cemeteryId: ${this.place.cemeteryId}, sectorId: ${this.place.sectorId}, number: ${this.place.number} `);
    this.onSelectClose();
  }


  onSelectClose(): void {
    this.place = this.placenochange;
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
  //     this.number = this.place.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.place.imgs.length)
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


  selectableCemeteries(): void {// создание списка кладбищ
    this.cemeteryService.getCemeterys()
        .subscribe((data: Cemetery[]) => this.cemeteries = data);
  }



  constructor( private placeService: PlaceService,
    private sectorService: SectorService,
    private cemeteryService: CemeteryService) { }


   onCemetery() {
    console.log(`выбрано кладбище: ${this.place.cemeteryId}, ${this.cemeteries[this.place.cemeteryId - 1].name} `);

    this.sectorService.getSectors()
      .subscribe((data: Sector[]) => this.sectors = data.filter(data1 => data1.cemeteryId === this.place.cemeteryId),
      error => console.log(error));

    console.log(this.sectors);
   }

  ngOnInit() {
    this.selectableCemeteries();
  }

}
