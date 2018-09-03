import { Component, OnInit } from '@angular/core';

import { Place } from '../place';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-dashboard-places',
  templateUrl: './dashboard-places.component.html',
  styleUrls: ['./dashboard-places.component.sass'],
  providers: [PlaceService]
})
export class DashboardPlacesComponent implements OnInit {
  
  places: Place[];

  selectedPlace: Place;
  selectedInfo: Place;
  open: boolean = false;

  constructor(private PlaceService: PlaceService) { }

  ngOnInit() {
    this.getPlaces();
  }

  onSelectPlace(place: Place): void {
    this.selectedPlace = place;
  }

  onSelectInfo(place: Place): void {
    this.selectedInfo = place;
    this.open = !this.open;
  }

  onClosed(closed:any) {
      closed == false ? this.open = false : this.open = true;
  }

  getPlaces(): void {
    this.PlaceService.getPlaces()
        .subscribe((places: Place[]) => this.places = places);
  }

}
