import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';

@Component({
  selector: 'app-sector-photo',
  templateUrl: './sector-photo.component.html',
  styleUrls: ['./sector-photo.component.sass']
})
export class SectorPhotoComponent implements OnInit {

  @Input() sector: Sector;
  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();
  @Output() onInfo = new EventEmitter<boolean>();

  close: boolean = !open;
  number = 0;

  onSelectClose(): void {
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
  }

  onSelectInfo(): void {
    this.onInfo.emit(this.open);
    this.open = !this.open;
  }

  // Переключатели фотографий
  onBefore(): void {
    this.number--;
    if (this.number === -1) {
      this.number = this.sector.imgs.length - 1;
    }
  }

  onNext(): void {
    this.number++;
    if (this.number === this.sector.imgs.length) {
      this.number = 0;
    }
  }
  // Переключатели фотографий - енд

  constructor() { }

  ngOnInit() {
  }

}
