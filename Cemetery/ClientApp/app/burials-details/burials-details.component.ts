import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Burial } from '../burial';

@Component({
  selector: 'app-burials-details',
  templateUrl: './burials-details.component.html',
  styleUrls: ['./burials-details.component.sass']
})
export class BurialsDetailsComponent implements OnInit {

  @Input() burial: Burial;
  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  close: boolean = !open;
  selectedPhoto: boolean = false;
  
  onSelectClose(): void {
    this.open = !this.open;
    this.onClose.emit(this.open);
  }
  
  onSelectPhoto(): void {
    this.selectedPhoto =  !this.selectedPhoto;
    this.open = !this.open;  
  }

  onClosed(closed:any) {
    closed == false ? this.open = false : this.open = true;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }

  onInfo(info:any) {
    info == false ? this.open = false : this.open = true;
    this.selectedPhoto =  !this.selectedPhoto;
  }

  constructor() { }

  ngOnInit() {
  }

}
