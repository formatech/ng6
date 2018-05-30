import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>

    <div class="feature">hello feature</div>

    <div class="body">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
})

export class AppComponent { }
