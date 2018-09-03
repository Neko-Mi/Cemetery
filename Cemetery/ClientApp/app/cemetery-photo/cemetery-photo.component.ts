import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-cemetery-photo',
  templateUrl: './cemetery-photo.component.html',
  styleUrls: ['./cemetery-photo.component.sass']
})
export class CemeteryPhotoComponent implements OnInit {

  @Input() cemetery: Cemetery;
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
    this.number = this.cemetery.imgs.length - 1;
  }

  onNext(): void {
    this.number++;
    if(this.number == this.cemetery.imgs.length) 
      this.number = 0;
  }

  constructor() { }

  ngOnInit() {
  }

}