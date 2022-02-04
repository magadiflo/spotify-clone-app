import { Component, OnDestroy, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/track.model';
import { Subscription } from 'rxjs';

import { TrackService } from '../../services/track.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit, OnDestroy {

  tracksTrending: TrackModel[] = [];
  tracksRandom: TrackModel[] = [];
  listObservers$: Subscription[] = [];

  constructor(private trackService: TrackService) { }
  
  ngOnInit(): void {
    this.trackService.getAllTracks$()
      .subscribe(resp => {
        console.log(resp); 
      });
  }
  
  ngOnDestroy(): void {

  }
}
