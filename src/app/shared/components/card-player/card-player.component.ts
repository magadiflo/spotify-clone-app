import { Component, Input, OnInit } from '@angular/core';

import { TrackModel } from '@core/models/track.model';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  @Input() track: TrackModel = {
    _id: 0,
    name: '',
    album: '',
    cover: '',
    url: ''
  }
  @Input() mode: 'small' | 'big' = 'small';

  constructor() { }

  ngOnInit(): void {
  }

}
