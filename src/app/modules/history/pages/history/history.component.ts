import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../services/search.service';

import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  listResults: TrackModel[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(term: string): void {
    console.log('Recibiendo término en history: ' + term);
    this.searchService.searchTracks$(term)
      .subscribe(({data}) => {
        this.listResults = data;  
      }); 
  }

}
