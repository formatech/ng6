import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { TestComponent } from './test.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  }
];

export default routes;
