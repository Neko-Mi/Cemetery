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
  open_change: boolean = false;

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

  onSelectChange(place: Place): void {
    this.selectedInfo = place;
    this.open_change = !this.open_change;
  }

  onClosed(closed:any) {
      closed == false ? this.open = false : this.open = true;
      closed == false ? this.open_change = false : this.open_change = true;
  }

  getPlaces(): void {
    this.PlaceService.getPlaces()
        .subscribe((places: Place[]) => this.places = places);
  }

}
