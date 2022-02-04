import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/track.model';

import { Observable, of } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  getAllTracks$(): Observable<TrackModel[]> {
    return this.http.get<TrackModel[]>(`${this.URL}/tracks`);
  }

}
