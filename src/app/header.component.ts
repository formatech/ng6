import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<div class="header">
  <a class="logo" href="/"><img src="/assets/logo.png" /></a>
  <app-menu></app-menu>
</div>
  `
})
export class HeaderComponent {
}
