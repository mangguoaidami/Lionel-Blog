import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
  selector: 'app',
  template: `
  <ng2-slim-loading-bar></ng2-slim-loading-bar>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnDestroy{
  private sub: any;

  constructor(private slimLoader: SlimLoadingBarService, private router: Router) {
    // Listen the navigation events to start or complete the slim bar loading
        this.sub = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.slimLoader.start();
            } else if ( event instanceof NavigationEnd ||
                        event instanceof NavigationCancel ||
                        event instanceof NavigationError) {
                this.slimLoader.complete();
            }
        }, (error: any) => {
            this.slimLoader.complete();
        });
  }

  ngOnDestroy(): any {
        this.sub.unsubscribe();
  }
}
