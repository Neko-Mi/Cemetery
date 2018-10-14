import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';
import { MENUS } from '../mock-menu';
import { SidebarService } from '../sidebar.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  menus = MENUS;

  selectedMenu: Menu;

  constructor(private sidebarService: SidebarService,
    private messageService: MessageService) {}

  ngOnInit() {
    this.getMenus();
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
    // this.messageService.addnew(menu.name);
  }

  getMenus(): void {
    this.sidebarService.getMenus()
        .subscribe(menus => this.menus = menus);
  }
}
