import { Component, OnInit } from '@angular/core';
import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-bottombar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.sass']
})
export class BottombarComponent implements OnInit {

  open_add: boolean = false;

  
  onAdd(): void {
    this.open_add = !this.open_add;
  }

  onClosed() {//для октрытия с первого раза после закрытия
    this.open_add = !this.open_add;
  }

  constructor() { }

  ngOnInit() {
  }

}
