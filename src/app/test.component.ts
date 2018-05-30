import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DataService } from './data.service';

@Component({
  template: `
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
`
})
export class TestComponent {
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
      // this.items = data;
    });
  }

  getLowerName() {
    return this.name.toLowerCase();
  }
}
