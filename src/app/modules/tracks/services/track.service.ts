import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/track.model';

import { catchError, map } from "rxjs/operators";
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL: string = environment.api;

  constructor(private http: HttpClient) { }

  getAllTracks$(): Observable<TrackModel[]> {
    return this.http.get<{ data: TrackModel[] }>(`${this.URL}/tracks`)
      .pipe(
        map(resp => resp.data)
      );
  }

  getAllRandom$(): Observable<TrackModel[]> {
    return this.http.get<{ data: TrackModel[] }>(`${this.URL}/tracks`)
      .pipe(
        map(resp => resp.data.reverse()),
        catchError(err => of([]))
      );
  }

}
