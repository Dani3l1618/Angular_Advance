export interface SideBar {
  titulo: string;
  icono: string;
  submenu: SideBarSubmenu[];
}

export interface SideBarSubmenu {
  titulo: string;
  url: string;
}
