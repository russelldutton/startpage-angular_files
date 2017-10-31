import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'searchlogo',
  templateUrl: './searchlogo.component.html',
  styleUrls: ['./searchlogo.component.css']
})
export class SearchlogoComponent implements OnInit {

  logos:string[] = [
    '../../../assets/google_logo.png',
    '../../../assets/youtube.png',
    '../../../assets/imdb.png'
  ];

  selectedLogo: string = this.logos[0];
  // selectedLogo: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
