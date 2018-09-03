import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-change-cemetery',
  templateUrl: './change-cemetery.component.html',
  styleUrls: ['./change-cemetery.component.sass']
})
export class ChangeCemeteryComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
