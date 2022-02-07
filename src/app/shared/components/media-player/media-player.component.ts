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

  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer: Subscription = this.multimediaService.callback
      .subscribe((resp: TrackModel) => {
        console.log('Recibiendo canción', resp);
      });
    this.listObservers.push(observer);

    const observable1$ = this.multimediaService.myObservable1$
      .subscribe({
        next: (res) => {
          console.log('llegó el agua? ' + res);
        },
        error: (err) => {
          console.log('Error de agua? ' + err);
        },
        complete: () => {
          console.log('Finalizooo...');
        }
      });
  }

  ngOnDestroy(): void {
    console.log('Destruyendo componente.....');
    this.listObservers.forEach(s => s.unsubscribe);
  }

}
