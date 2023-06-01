import { Injectable } from '@angular/core';
import { SideBar } from '../interfaces/sidebar.interface';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: SideBar[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: './' },
        { titulo: 'ProgressBar', url: './progress' },
        { titulo: 'Gráficas', url: './grafica1' },
      ],
    },
  ];

  constructor() {}
}
