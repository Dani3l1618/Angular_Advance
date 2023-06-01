import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  title: string = '';
  routerSubscription?: Subscription;
  constructor(private router: Router) {
    this.getTitleRoute();
  }
  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  getTitleRoute() {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof ActivationEnd),
        filter(
          (event) => (event as ActivationEnd).snapshot.firstChild === null
        ),
        map((event) => (event as ActivationEnd).snapshot)
      )
      .subscribe(({ data }) => {
        this.title = data['titulo'];
        document.title = `AdminPro - ${this.title}`;
      });
  }
}
