import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
import { Sector } from './sector';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class SectorService {
    private url = "/api/sectors";

    constructor(private messageService: MessageService,
        private http: HttpClient) { }
  
  // get all sectors
  getSectors() {
      this.messageService.addnew('Сектора');

      return this.http.get(this.url);
  }

  //getSector(id: number): Observable<Sector> {
  //  // TODO: send the message _after_ fetching the hero
  //  //this.messageService.add2(`SectorService: fetched Sector id=${id}`);
  //  return of(SECTORS.find(sector => sector.id === id));
  //}

  createSector(sector: Sector) {
    return this.http.post(this.url, sector);
  }

  updateSector(sector: Sector) {
    return this.http.put(this.url, sector);
  }

  deleteSector(sector: Sector | number) {
    const id = typeof sector === 'number' ? sector : sector.id;

    return this.http.delete<Sector>(this.url + '/' + id);
  }
}
