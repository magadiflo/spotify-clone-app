import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/track.model';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  searchTracks$(term: string): Observable<any> {
    const params = new HttpParams().set("src", term);
    return this.http.get<{data: TrackModel[]}>(`${this.URL}/tracks`, { params })
      .pipe(
        map(res => res.data)
      );
  }

}
