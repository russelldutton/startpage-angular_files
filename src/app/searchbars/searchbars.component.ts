import { Component, OnInit } from '@angular/core';
import { SearchlogoComponent } from './searchlogo/searchlogo.component';

@Component({
  selector: 'searchbars',
  templateUrl: './searchbars.component.html',
  styleUrls: ['./searchbars.component.css']
})
export class SearchbarsComponent implements OnInit {
  logos = [
    {
      src: '/assets/google_logo.png',
      link: 'http://www.google.co.za'
    },
    {
      src: '/assets/youtube.png',
      link: 'http://www.youtube.co.za'
    },
    {
      src: '/assets/imdb.png',
      link: 'http://www.imdb.com'
    }
  ];

  bars = [
    {
      name: 'Google Search',
      link: 'http://www.google.co.za/search'
    },
    {
      name: 'YouTube Search',
      link: 'http://www.youtube.co.za/results'
    },
    {
      name: 'IMDB Search',
      link: 'http://www.imdb.com/find'
    }
  ];

  selectedLogo = this.logos[0];
  focus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onFocus(index: number): void {
    this.focus = true;
    this.selectedLogo = this.logos[index];
    console.log(index);
  }
  
  onBlur(): void {
    this.focus = false;
  }

  onHover(index: number) {
    if ( !this.focus ) {
      this.selectedLogo = this.logos[index];
    }
  }

}
