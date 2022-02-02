import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  mockTracksList: TrackModel[] = [];

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }

}
