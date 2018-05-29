import { Component } from '@angular/core';
import { DataService } from './data.service';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="header">
      <a href="/"><img src="/assets/logo.png" /></a>
      <div class="menu">
        <a href="/">Home</a>
        <a href="/">Customers</a>
        <a href="/">Providers</a>
        <a href="/">Contact</a>
      <div>
    </div>

    <div class="body">

      <input type="text" [(ngModel)]="myText">

       <input type="text" (keyup)="click$.next($event.target.value)">

       <ul>
         <li *ngFor="let row of items$ | async">{{ row }}</li>
       </ul>

       <div [ngSwitch]="page">
         <div *ngSwitchCase="'home'">Home Page</div>
         <div *ngSwitchCase="'about'">About Page</div>
         <div *ngSwitchDefault> is {{ myText.length }}</div>
       </div>

    </div>

    <div class="footer">
      Copyright OMT {{ year }}
    </div>
  `,
})

// myDirective
export class AppComponent {

  myText = 'hellodsdf';

  public items$;
  public name = 'OMT FINANCE';
  year = new Date().getFullYear();

  click$ = new Subject<string>();

  constructor(public data: DataService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {

    this.items$ = this.click$
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(q => this.data.search(q))
      );

  }

  onButtonClicked() {
    console.log('button clicked');
  }

  onKeyup(value) {
    console.log(value);

    this.myText = value;

    // document.getElementById('pr').innerHTML = value;
    // document.getElementById('input2').value = value;

  }


  search(value) {

    this.data.search(value).pipe(debounceTime(1000)).subscribe(data => {
      console.log(data);
      this.items = data;
    });
  }

  getLowerName() {
    return this.name.toLowerCase();
  }

}
