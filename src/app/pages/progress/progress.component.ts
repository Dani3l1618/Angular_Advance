import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progres: number[] = [40, 10];
  classes: string[] = ['primary', 'warm'];
  onProgress(progres: number, ix: number) {
    this.progres[ix] = progres;
  }
}
