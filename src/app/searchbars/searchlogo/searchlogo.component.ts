import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'searchlogo',
  templateUrl: './searchlogo.component.html',
  styleUrls: ['./searchlogo.component.css']
})
export class SearchlogoComponent implements OnInit {

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

  @Input() selectedLogo;

  constructor() { }

  ngOnInit() {
  }

}
