import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { DonutCharComponent } from './donut-char/donut-char.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    IncrementadorComponent,
    ProgressBarComponent,
    DonutCharComponent,
  ],
  imports: [CommonModule, FormsModule, NgChartsModule],
  exports: [IncrementadorComponent, ProgressBarComponent, DonutCharComponent],
})
export class ComponentsModule {}
