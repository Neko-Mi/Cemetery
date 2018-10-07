import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Burial } from '../burial';
import { BurialService } from '../burial.service';

@Component({
    selector: 'app-change-burial',
    templateUrl: './change-burial.component.html',
    styleUrls: ['./change-burial.component.sass']
})
export class ChangeBurialComponent implements OnInit {

    @Input() burial: Burial;
    @Input() open: boolean;

    @Output() onClose = new EventEmitter<boolean>();

    burials: Burial[] = [];

    close: boolean = !open;
    number = 0;
    selectedPhoto = false;
    PhotoOpen: boolean = this.selectedPhoto;

    burialchange: Burial = new Burial(); // данные вводимого пользователя

    done = false;

    constructor(
        private burialService: BurialService
    ) { }

    save(burial: Burial) {
        this.burialService.createBurial(burial)
            .subscribe(
                (data: Burial) => { this.burial = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    saveChanges(burial: Burial) {
        this.burialService.updateBurial(burial)
            .subscribe (
                (data: Burial) => { this.burial = data; this.done = true; },
                error => console.log(error)
            );
        this.onSelectClose();
    }

    delete(burial: Burial): void {
        this.burialService.deleteBurial(burial)
            .subscribe(
                (data: Burial) => { this.burial = data; this.done = true; },
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

    onBefore(): void {
        this.number--;
        if (this.number === -1) {
            this.number = this.burial.imgs.length - 1;
        }
    }

    onNext(): void {
        this.number++;
        if (this.number === this.burial.imgs.length) {
            this.number = 0;
        }
    }

    onSelectPhoto(): void {
        this.selectedPhoto = !this.selectedPhoto;
        // this.open = !this.open;
    }

    onClosed(closed: any) {
        this.open = !this.open;
        this.selectedPhoto = !this.selectedPhoto;
        this.onClose.emit(this.open);
    }

    ngOnInit() {
    }
}
