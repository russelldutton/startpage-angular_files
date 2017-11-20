import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
  providers: [ BookmarkService ]
})

export class BookmarksComponent implements OnInit {
  
  bookmarks: {}[];

  masonryOptions = {
    itemSelector: '.grid-item',
    columnwidth: 250,
    gutter: 10,
    horizontalOrder: true,
    percentPosition: true,
    fitWidth: true
  };

  constructor( private bookmark: BookmarkService ) { }
  
  
  ngOnInit() {
    this.bookmark.getBookmarkList().subscribe( data => { this.bookmarks = data['bookmarks'] } );
    
  }

}
