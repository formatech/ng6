import { BrowserModule } from '@angular/platform-browser'; // language level
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule], // angular level
  declarations: [AppComponent],
  providers: [DataService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

