import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<div class="footer">
  Copyright OMT {{ year }}
</div>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
