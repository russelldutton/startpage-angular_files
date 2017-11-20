import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { SearchbarsComponent } from './searchbars/searchbars.component';
import { SearchlogoComponent } from './searchbars/searchlogo/searchlogo.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { IconbarComponent } from './iconbar/iconbar.component';

import { BookmarkService } from './bookmark.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarsComponent,
    SearchlogoComponent,
    BookmarksComponent,
    IconbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MasonryModule
  ],
  providers: [ BookmarkService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
