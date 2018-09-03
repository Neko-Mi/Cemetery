import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
import { Sector } from './sector';
//import { SECTORS } from './mock-sector';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class SectorService {
    private url = "/api/sectors";

    constructor(private messageService: MessageService,
        private http: HttpClient) { }

  getSectors()/*: Observable<Sector[]>*/ {
    // TODO: send the message _after_ fetching the heroes
      this.messageService.addnew('Сектора');
      return this.http.get(this.url);
  }

  //getSector(id: number): Observable<Sector> {
  //  // TODO: send the message _after_ fetching the hero
  //  //this.messageService.add2(`SectorService: fetched Sector id=${id}`);
  //  return of(SECTORS.find(sector => sector.id === id));
  //}
}
