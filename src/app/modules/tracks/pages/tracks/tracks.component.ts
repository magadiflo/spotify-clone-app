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
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(resp => {
      console.log('Canciones tranding', resp);
      this.tracksTrending = resp;
      this.tracksRandom = resp;
    });

    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(resp => {
      console.log('Canciones random entrando', resp);
      this.tracksRandom = [...this.tracksRandom, ...resp];  
    });

    this.listObservers$.push(observer1$);
    this.listObservers$.push(observer2$);
  }
  
  ngOnDestroy(): void {
    this.listObservers$.forEach(s => s.unsubscribe);    
  }
}
