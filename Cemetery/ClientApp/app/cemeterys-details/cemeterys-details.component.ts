import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-cemeterys-details',
  templateUrl: './cemeterys-details.component.html',
  styleUrls: ['./cemeterys-details.component.sass']
})
export class CemeterysDetailsComponent implements OnInit {

  @Input() cemetery: Cemetery;
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