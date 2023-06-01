import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.querySelector('#theme');
  links?: NodeListOf<HTMLAnchorElement>;

  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {
    this.links = document.querySelectorAll<HTMLAnchorElement>('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingService.changeTheme(theme);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    if (!this.links) return;
    this.settingService.checkCurrentTheme(this.links);
  }
}
