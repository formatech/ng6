import { Component } from '@angular/core';

@Component({
  template: `
    <div class="not-found">
    Page is not found 🙄
    <br>
    <small>You can change this message from <code>NotFoundComponent.ts</code></small>
    </div>
  `,
  styles: [`
  .not-found {
    color: #fr443e;
    font-size: 20px;
    text-align: center;
    padding: 100px 0;
  }
  `]
})
export class NotFoundComponent {

}
