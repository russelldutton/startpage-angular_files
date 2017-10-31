import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarsComponent } from './searchbars/searchbars.component';
import { SearchlogoComponent } from './searchbars/searchlogo/searchlogo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarsComponent,
    SearchlogoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
