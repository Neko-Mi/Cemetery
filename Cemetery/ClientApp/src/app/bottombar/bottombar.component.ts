import { Component, OnInit } from '@angular/core';
import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.sass']
})
export class BottombarComponent implements OnInit {

  open_cemetery: boolean = false;
  open_sector: boolean = false;
  open_place: boolean = false;
  open_burial: boolean = false;

  
  onCemetery(): void {
    this.open_cemetery = !this.open_cemetery;
  }
  onSector(): void {
    this.open_sector = !this.open_sector;
  }
  onPlace(): void {
    this.open_place = !this.open_place;
  }
  onBurial(): void {
    this.open_burial = !this.open_burial;
  }

  onClosedCemetery() {//для октрытия с первого раза после закрытия
    this.open_cemetery = !this.open_cemetery;
    // this.open_sector = !this.open_sector;
    // this.open_place = !this.open_place;
    // this.open_burial = !this.open_burial;
  }

  onClosedSector() {//для октрытия с первого раза после закрытия
    //this.open_cemetery = !this.open_cemetery;
    this.open_sector = !this.open_sector;
    // this.open_place = !this.open_place;
    // this.open_burial = !this.open_burial;
  }

  onClosedPlace() {//для октрытия с первого раза после закрытия
    //this.open_cemetery = !this.open_cemetery;
    // this.open_sector = !this.open_sector;
     this.open_place = !this.open_place;
    // this.open_burial = !this.open_burial;
  }

  onClosedBurial() {//для октрытия с первого раза после закрытия
    //this.open_cemetery = !this.open_cemetery;
    // this.open_sector = !this.open_sector;
    // this.open_place = !this.open_place;
    this.open_burial = !this.open_burial;
  }

  constructor() { }

  ngOnInit() {
  }

}
