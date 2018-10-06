import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Burial } from '../burial';
import { BurialService }  from '../burial.service';

@Component({
  selector: 'app-add-burial',
  templateUrl: './add-burial.component.html',
  styleUrls: ['./add-burial.component.sass']
})
export class AddBurialComponent implements OnInit {


  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  burials: Burial[] = [];

  close: boolean = !open;
  number:number = 0;
  selectedPhoto: boolean = false;
  PhotoOpen:boolean = this.selectedPhoto;
  burialnochange: Burial = new Burial(); // данные вводимого пользователя

  burial: Burial = new Burial(); // данные вводимого пользователя
      
  //receivedBurial: Burial; // полученный пользователь
  done: boolean = false;
  

  save(burial: Burial) {
    // 'post' using for creating new object in database
    // 
    this.burialService.createBurial(burial)
      .subscribe(
        (data: Burial) => { this.burial = data; this.done = true; },
        error => console.log(error)
      );
    this.onSelectClose();
  }




  onSelectClose(): void {
    this.burial = this.burialnochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if(this.selectedPhoto == true)
      this.selectedPhoto = false;
  }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1) 
  //     this.number = this.burial.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.burial.imgs.length) 
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




  constructor(    private burialService: BurialService) { }

  ngOnInit() {
  }

}
