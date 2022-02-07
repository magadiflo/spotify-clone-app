import { Component, OnInit, Input } from '@angular/core';

import { TrackModel } from '@core/models/track.model';

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

  @Input() tracksList: TrackModel[] = [];
  optionSort: OptionSort = {
    property: null,
    order: 'asc',
  }

  constructor() { }

  ngOnInit(): void {

  }

  changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc',
    }
  }

}
