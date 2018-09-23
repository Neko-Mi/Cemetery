import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
import { Place } from './place';
//import { PLACES } from './mock-place';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
    private url = "/api/places";

    constructor(private messageService: MessageService,
        private http: HttpClient) {
    }

    getPlaces() {
        // TODO: send the message _after_ fetching the heroes
        this.messageService.addnew('Места захоронений');

        return this.http.get(this.url);
    }

  //getPlace(id: number): Observable<Place> {
  //  // TODO: send the message _after_ fetching the hero
  //  //this.messageService.add2(`PlaceService: fetched Place id=${id}`);
  //  return of(PLACES.find(place => place.id === id));
  //}
    
    createPlace(place: Place) {
        return this.http.post(this.url, place);
    }

    updatePlace(place: Place) {
        return this.http.put(this.url, place);
    }

    deletePlace(place: Place | number) {
        const id = typeof place === 'number' ? place : place.id;

        return this.http.delete<Place>(this.url + '/' + id);
    }
}
