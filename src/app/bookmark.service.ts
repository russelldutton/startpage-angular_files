import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BookmarkService {

  obs: Observable<any>;

  constructor( private http: Http ) {
    this.obs = this.getJSON();
  }

  public getBookmarkList(): Observable<any> {
    return this.obs;
  }

  public getIconList(): Observable<any> {
    return this.obs;
  }

  private getJSON() {
    return this.http.get('./assets/bookmarks.json').map( (res:Response) => res.json() );
  }

}
