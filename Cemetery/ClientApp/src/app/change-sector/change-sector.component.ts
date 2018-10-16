import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Sector } from '../sector';
import { SectorService } from '../sector.service';

@Component({
    selector: 'app-change-sector',
    templateUrl: './change-sector.component.html',
    styleUrls: ['./change-sector.component.sass']
})
export class ChangeSectorComponent implements OnInit {

    @Input() sector: Sector;
    @Input() open: boolean;

    @Output() onClose = new EventEmitter<boolean>();

    sectors: Sector[] = [];

    close: boolean = !open;
    number = 0;
    selectedPhoto = false;
    PhotoOpen = this.selectedPhoto;

    sectorchange: Sector = new Sector(); // данные вводимого пользователя

    // receivedSector: Sector; // полученный пользователь
    done = false;

    constructor(
        private sectorService: SectorService
    ) { }

    save(sector: Sector) {
        this.sectorService.createSector(sector)
            .subscribe(
                (data: Sector) => { this.sector = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    saveChanges(sector: Sector) {
        this.sectorService.updateSector(sector)
            .subscribe(
                (data: Sector) => { this.sector = data; this.done = true; },
                error => console.log(error)
        );
        this.onSelectClose();
    }

    delete(sector: Sector): void {
        this.sectorService.deleteSector(sector)
            .subscribe(
                (data: Sector) => { this.sector = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    onSelectClose(): void {
        this.number = 0;
        this.open = !this.open;
        this.onClose.emit(this.open);
        if (this.selectedPhoto === true) {
            this.selectedPhoto = false;
        }
    }

    // Переключатели фотографий //
    onBefore(): void {
        this.number--;
        if (this.number === -1) {
            this.number = this.sector.imgs.length - 1;
        }
    }

    onNext(): void {
        this.number++;
        if (this.number === this.sector.imgs.length) {
            this.number = 0;
        }
    }
    // Переключатели фотографий - енд //

    onSelectPhoto(): void {
        this.selectedPhoto =  !this.selectedPhoto;
        // this.open = !this.open;
    }

    // onClosed(closed:any) {
    //     closed == false ? this.open = false : this.open = true;
    //     this.selectedPhoto =  !this.selectedPhoto;
    //     this.onClose.emit(this.open);
    // }

    ngOnInit() {
    }

}
