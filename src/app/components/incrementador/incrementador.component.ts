import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'component-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent {
  @Output() onProgress = new EventEmitter<number>();

  @Input()
  progreso: number = 20;

  @Input()
  className: string = 'primary';

  changePorcentage(valor: number) {
    this.progreso += valor;
    if (this.progreso > 100) this.progreso = 100;
    if (this.progreso < 0) this.progreso = 0;

    this.onProgress.emit(this.progreso);
  }

  onChange(value: number) {
    this.changePorcentage(value);
  }
}
