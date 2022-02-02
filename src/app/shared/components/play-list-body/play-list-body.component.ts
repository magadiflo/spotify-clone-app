import { Component, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/track.model';
import * as dataRaw from '../../../data/tracks.json';

interface OptionSort {
  property: string | null,
  order: string,
}

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  mockTracksList: TrackModel[] = [];
  optionSort: OptionSort = {
    property: null,
    order: 'asc',
  }

  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    }
  }

}
