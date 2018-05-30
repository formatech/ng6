import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  template: `
<div class="menu">
  <a routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{exact: true}">Home</a>

  <a *ngFor="let item of data" routerLinkActive="active"
  [routerLink]="'/' + item.path">{{ item.text }}</a>

</div>
  `
})
export class MenuComponent {

  data = [
    { path: 'about', text: 'About' },
    { path: 'customers', text: 'Customers' },
    { path: 'providers', text: 'Providers' },
    { path: 'contact', text: 'Contact' },
    { path: 'test', text: 'Test' },
  ];

}

