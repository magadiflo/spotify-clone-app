import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SearchService } from '../../services/search.service';

import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  listResults$: Observable<any> = of([]);

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(term: string): void {
    console.log('Recibiendo término en history: ' + term);
    this.listResults$ = this.searchService.searchTracks$(term);
  }

}
