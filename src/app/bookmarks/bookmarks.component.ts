import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})

export class BookmarksComponent implements OnInit {
  
  bookmarks: {}[];

  constructor( private http: Http ) { }
  
  
  ngOnInit() {

    this.getJSON().subscribe( data => this.bookmarks = data['bookmarks'] );
  }

  public getJSON(): Observable<any> {
    return this.http.get("assets/bookmarks.json").map( (res: any) => res.json() );
  }

}
