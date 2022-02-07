import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() termData: EventEmitter<string> = new EventEmitter();
  src: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    if(term.length >= 3){
      this.termData.emit(term);
    }
  }

}
