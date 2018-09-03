import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Burial } from '../burial';

@Component({
  selector: 'app-burial-photo',
  templateUrl: './burial-photo.component.html',
  styleUrls: ['./burial-photo.component.sass']
})
export class BurialPhotoComponent implements OnInit {

  @Input() burial: Burial;
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
    this.number = this.burial.imgs.length - 1;
  }

  onNext(): void {
    this.number++;
    if(this.number == this.burial.imgs.length) 
      this.number = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}
