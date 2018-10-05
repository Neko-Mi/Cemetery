import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Place } from '../place';

@Component({
  selector: 'app-place-photo',
  templateUrl: './place-photo.component.html',
  styleUrls: ['./place-photo.component.sass']
})
export class PlacePhotoComponent implements OnInit {

  @Input() place: Place;
  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();
  @Output() onInfo = new EventEmitter<boolean>();

  close: boolean = !open;
  number:number = 0;
 
  onSelectClose(): void {
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
  }

  onSelectInfo(): void {
    this.onInfo.emit(this.open);
    this.open = !this.open;
  }

  onBefore(): void {
    this.number--;
    if(this.number == -1) 
    this.number = this.place.imgs.length - 1;
  }

  onNext(): void {
    this.number++;
    if(this.number == this.place.imgs.length) 
      this.number = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
