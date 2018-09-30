import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
    selector: 'app-change-place',
    templateUrl: './change-place.component.html',
    styleUrls: ['./change-place.component.sass']
})
export class ChangePlaceComponent implements OnInit {

    @Input() place: Place;
    @Input() open: boolean;

    @Output() onClose = new EventEmitter<boolean>();

    places: Place[] = [];

    close: boolean = !open;
    number: number = 0;
    selectedPhoto: boolean = false;
    PhotoOpen: boolean = this.selectedPhoto;

    placeChange: Place = new Place();

    done: boolean = false;

    constructor(private placeService: PlaceService) { }

    save(place: Place) {
        this.placeService.createPlace(place)
            .subscribe(
                (data: Place) => { this.place = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    saveChanges(place: Place) {
        this.placeService.updatePlace(place)
            .subscribe(
                (data: Place) => { this.place = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    delete(place: Place) {
        this.placeService.deletePlace(place)
            .subscribe(
                (data: Place) => { this.place = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    onSelectClose(): any {
        this.number = 0;
        this.open = !this.open;
        this.onClose.emit(this.open);
        if(this.selectedPhoto == true)
            this.selectedPhoto = false;
    }

    onBefore(): void {
        this.number--;
        if(this.number == -1) 
            this.number = this.place.imgs.length - 1;
    }

    onNext(): void {
        this.number++;
        if(this.number == this.place.imgs.length) 
            this.number = 0;
    }
  
    onSelectPhoto(): void {
        this.selectedPhoto =  !this.selectedPhoto;
        //this.open = !this.open;  
    }

    onClosed(closed:any) {
        closed == false ? this.open = false : this.open = true;
        this.selectedPhoto =  !this.selectedPhoto;
        this.onClose.emit(this.open);
    }

    ngOnInit() {
    }

}
