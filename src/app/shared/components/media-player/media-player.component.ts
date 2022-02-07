import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { MultimediaService } from '../../services/multimedia.service';

import { TrackModel } from '@core/models/track.model';


@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  
  listObservers: Subscription[] = [];

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void { 
  }

  ngOnDestroy(): void {
    console.log('Destruyendo componente.....');
    this.listObservers.forEach(s => s.unsubscribe);
  }

}
