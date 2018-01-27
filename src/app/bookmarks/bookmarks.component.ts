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
    horizontalOrder: true,
    percentPosition: true
  };

  constructor( private bookmark: BookmarkService ) { }
  
  
  ngOnInit() {
    this.bookmark.getBookmarkList().subscribe( data => { this.bookmarks = data['bookmarks'] } );
    
  }

}
