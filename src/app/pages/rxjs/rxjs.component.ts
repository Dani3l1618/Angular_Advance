import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnDestroy {
  obsSubscriptor?: Subscription;

  constructor() {
    const obs$ = new Observable((observer) => {
      let i = 0;
      const int = setInterval(() => {
        i++;
        observer.next(new Date().toLocaleString());
        if (i === 10) {
          clearInterval(int);
          observer.complete();
        }
      }, 1000);
    });

    this.obsSubscriptor = obs$.subscribe((value) =>
      console.log('Time: ', value)
    );
  }

  ngOnDestroy(): void {
    this.obsSubscriptor?.unsubscribe();
  }
}
