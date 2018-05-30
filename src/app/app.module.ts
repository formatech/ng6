import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './approuting.module';
import { DataService } from './data.service';
import declarations from './declarations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: declarations,
  providers: [DataService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

  constructor() {
    console.log('creating new app module');
  }
}

