import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

    <div class="feature">Fast</div>
    <div class="feature">Reliable</div>

  `,
  styles: [`
  .feature {
    font-size: 18px;
    text-align: center;
    color: red;
  }
  `],
})
export class HomeComponent {



}
