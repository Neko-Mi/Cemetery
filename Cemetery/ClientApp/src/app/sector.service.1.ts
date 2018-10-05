import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Menu } from './menu';
import { MENUS } from './mock-menu';
import { MessageService } from './message.service';
 

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private messageService: MessageService) { }

  getMenus(): Observable<Menu[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('SectorService: fetched sectors');
    return of(MENUS);
  }

  getSector(id: number): Observable<Menu> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`SectorService: fetched Sector id=${id}`);
    return of(MENUS.find(menu => menu.id === id));
  }
}
