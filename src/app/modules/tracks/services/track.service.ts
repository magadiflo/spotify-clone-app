import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/track.model';

import { Observable, of } from 'rxjs';

import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 9,
        name: 'Grupo 5',
        album: 'Homenaje a Elmer Yaipén',
        url: 'http://',
        cover: 'https://diariocorreo.pe/resizer/THNvRA9geUOKi5wMqATYSsPaq3Q=/1200x1200/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/FUDJ77GTLFERHFCACA2OZTVK4U.png'
      }
      observer.next([trackExample]);
    });
  }

}
