import { Component, OnInit } from '@angular/core';

import { BookmarkService } from '../bookmark.service';

@Component({
  selector: 'iconbar',
  templateUrl: './iconbar.component.html',
  styleUrls: ['./iconbar.component.css'],
  providers: [ BookmarkService ]
})
export class IconbarComponent implements OnInit {

  icons: {}[];

  constructor( private bookmark: BookmarkService ) { }

  ngOnInit() {
    this.bookmark.getIconList().subscribe( data => { this.icons = data['icon-bar'] } );
  }

}
