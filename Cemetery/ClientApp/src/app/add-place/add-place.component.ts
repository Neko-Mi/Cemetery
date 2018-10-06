import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../place';
import { PlaceService }  from '../place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  cemeteries: Place[] = [];

  close: boolean = !open;
  number:number = 0;
  selectedPhoto: boolean = false;
  PhotoOpen:boolean = this.selectedPhoto;
  placenochange: Place = new Place(); // данные вводимого пользователя

  place: Place = new Place(); // данные вводимого пользователя
      
  //receivedPlace: Place; // полученный пользователь
  done: boolean = false;
  

  save(place: Place) {
    // 'post' using for creating new object in database
    // 
    this.placeService.createPlace(place)
      .subscribe(
        (data: Place) => { this.place = data; this.done = true; },
        error => console.log(error)
      );
    this.onSelectClose();
  }




  onSelectClose(): void {
    this.place = this.placenochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if(this.selectedPhoto == true)
      this.selectedPhoto = false;
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
    //this.open = !this.open;  
  }

  onClosed() {
    this.open = !this.open;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }




  constructor(    private placeService: PlaceService) { }

  ngOnInit() {
  }

}
