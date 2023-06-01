import { AfterViewInit, Component } from '@angular/core';
import { SideBar } from 'src/app/interfaces/sidebar.interface';
import { SidebarService } from 'src/app/services/sidebar.service';

declare let $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements AfterViewInit {
  menuItems: SideBar[] = [];
  constructor(private sidebarService: SidebarService) {
    this.menuItems = sidebarService.menu;
  }

  ngAfterViewInit(): void {
    $('#sidebarnav').AdminMenu();
  }
}
