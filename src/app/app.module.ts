import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchbarsComponent } from './searchbars/searchbars.component';
import { SearchlogoComponent } from './searchbars/searchlogo/searchlogo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarsComponent,
    SearchlogoComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
