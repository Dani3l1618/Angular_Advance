import { Component, Input } from '@angular/core';

@Component({
  selector: 'component-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [],
})
export class ProgressBarComponent {
  @Input()
  progreso: number = 20;

  @Input()
  className: string = 'primary';

  get porcentage(): string {
    return `${this.progreso}%`;
  }
}
