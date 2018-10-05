import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cemetery } from '../cemetery';
import { CemeteryService }  from '../cemetery.service';

@Component({
  selector: 'app-add-cemetery',
  templateUrl: './add-cemetery.component.html',
  styleUrls: ['./add-cemetery.component.sass']
})
export class AddCemeteryComponent implements OnInit {


  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  cemeteries: Cemetery[] = [];

  close: boolean = !open;
  number:number = 0;
  selectedPhoto: boolean = false;
  PhotoOpen:boolean = this.selectedPhoto;
  cemeterynochange: Cemetery = new Cemetery(); // данные вводимого пользователя

  cemetery: Cemetery = new Cemetery(); // данные вводимого пользователя
      
  //receivedCemetery: Cemetery; // полученный пользователь
  done: boolean = false;
  

  save(cemetery: Cemetery) {
    // 'post' using for creating new object in database
    // 
    this.cemeteryService.createCemetery(cemetery)
      .subscribe(
        (data: Cemetery) => { this.cemetery = data; this.done = true; },
        error => console.log(error)
      );
    this.onSelectClose();
  }


  // saveChanges(cemetery: Cemetery){
  //   console.log(cemetery.id + " " + cemetery.name + " " + cemetery.address);
  //   this.cemeteryService.updateCemetery(cemetery)
  //     .subscribe(
  //       (data: Cemetery) => { this.cemetery = data; this.done = true; },
  //       error => console.log(error)
  //     );
  //   this.onSelectClose();
  // }
  
  // delete(cemetery: Cemetery): void {
  //   //this.cemeteries = this.cemeteries.filter(cem => cem !== cemetery);//удаление из отображения

  //   this.cemeteryService.deleteCemetery(cemetery.id)
  //     .subscribe(
  //       (data: Cemetery) => { this.cemetery = data; this.done = true; },
  //       error => console.log(error)
  //     );

  //   this.onSelectClose();
  // }




  onSelectClose(): void {
    this.cemetery = this.cemeterynochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if(this.selectedPhoto == true)
      this.selectedPhoto = false;
  }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1) 
  //     this.number = this.cemetery.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.cemetery.imgs.length) 
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




  constructor(    private cemeteryService: CemeteryService) { }

  ngOnInit() {
  }

}
