import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
 
import { Burial } from './burial';
// import { BURIALS } from './mock-burial';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class BurialService {
  private url = "/api/burials";

  constructor(private messageService: MessageService,
    private http: HttpClient) { 
  }

  getBurials() {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.addnew('Захоронения');

    return this.http.get(this.url);
  }

  // getBurial(id: number): Observable<Burial> {
  //   // TODO: send the message _after_ fetching the hero
  //   //this.messageService.addnew(`BurialService: fetched Burial id=${id}`);
  //   return of(BURIALS.find(burial => burial.Id === id));
  // }

  createBurial(person: Burial) {
    return this.http.post(this.url, person);
  }

  updateBurial(person: Burial) {
    return this.http.put(this.url, person);
  }

  deleteBurial(burial: Burial | number) {
    const id = typeof burial === 'number' ? burial : burial.id;
    return this.http.delete(this.url + '/' + id);
  } 

  // getAddress(): Observable<Burial> {
  //   return of(BURIALS.find(burial => burial.Id === 10));
  // }
}