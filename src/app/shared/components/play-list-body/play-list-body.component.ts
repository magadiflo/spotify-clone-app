import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  mockTracksList: TrackModel[] = [];

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }

}
