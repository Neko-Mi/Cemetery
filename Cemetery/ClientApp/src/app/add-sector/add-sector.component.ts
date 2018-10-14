import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';
import { SectorService } from '../sector.service';
import { CemeteryService } from '../cemetery.service';
import { Cemetery } from '../cemetery';

@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.sass']
})
export class AddSectorComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>(); // для корректного закрытия

  cemeteries: Cemetery[] = []; // для списка кладбищ

  close: boolean = !open;
  number = 0;
  selectedPhoto = false;
  PhotoOpen = this.selectedPhoto;


  sectornochange: Sector = new Sector(); // данные вводимого пользователя

  sector: Sector = new Sector(); // данные вводимого пользователя

  done = false;

  save(sector: Sector) {// отправка запроса на создание сектора
    // 'post' using for creating new object in database
    this.sectorService.createSector(sector)
      .subscribe(
        (data: Sector) => { this.sector = data; this.done = true; },
        error => console.log(error)
      );
    this.onSelectClose();
  }

  onSelectClose(): void {
    this.sector = this.sectornochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if (this.selectedPhoto === true) {
      this.selectedPhoto = false;
    }
  }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1)
  //     this.number = this.sector.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.sector.imgs.length)
  //     this.number = 0;
  // }

  onSelectPhoto(): void {
    this.selectedPhoto =  !this.selectedPhoto;
    // this.open = !this.open;
  }

  onClosed() {
    this.open = !this.open;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }

  selectableCemeteries(): void {// создание списка кладбищ
    this.cemeteryService.getCemeterys()
      .subscribe((data: Cemetery[]) => this.cemeteries = data);
  }

  constructor(private sectorService: SectorService,
    private cemeteryService: CemeteryService) { }

  ngOnInit() {
    this.selectableCemeteries();
  }

}
