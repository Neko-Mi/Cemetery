import { Component, OnInit } from '@angular/core';

import { Menu } from '../menu';
import { MENUS } from '../mock-menu';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  menus = MENUS;

  selectedMenu: Menu;

  constructor(private SidebarService: SidebarService) {}

  ngOnInit() {
    this.getMenus();
  }

  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }

  getMenus(): void {
    this.SidebarService.getMenus()
        .subscribe(menus => this.menus = menus);
  }
}
