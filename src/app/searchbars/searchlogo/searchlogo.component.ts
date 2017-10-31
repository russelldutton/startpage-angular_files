import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'searchlogo',
  templateUrl: './searchlogo.component.html',
  styleUrls: ['./searchlogo.component.css']
})
export class SearchlogoComponent implements OnInit {

  

  @Input() selectedLogo;
  // selectedLogo: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
