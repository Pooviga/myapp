import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HiMsgesComponent } from './hi-msges/hi-msges.component';
import { CounterComponent } from './counter/counter.component';
import { ColorgameComponent } from './colorgame/colorgame.component';
import { ColourBoxComponent } from './colour-box/colour-box.component';
import { FormsModule } from '@angular/forms';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HiMsgesComponent,
    CounterComponent,
    ColorgameComponent,
    ColourBoxComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
