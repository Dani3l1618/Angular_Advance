import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {
    this.getTheme();
  }

  getTheme() {
    const url =
      localStorage.getItem('theme') ?? `./assets/css/colors/blue-dark.css`;

    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    // this.checkCurrentTheme();
  }

  checkCurrentTheme(links: NodeListOf<HTMLAnchorElement>) {
    links.forEach((link) => {
      link.classList.remove('working');
      const linkTheme = link.dataset['theme'];
      const hrefTheme = `./assets/css/colors/${linkTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (hrefTheme == currentTheme) link.classList.add('working');
    });
  }
}
