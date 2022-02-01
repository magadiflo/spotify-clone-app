import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  mockTracksList = [
    {
      name: 'Los caribeños (Oficial)'
    },
    {
      name: 'Grupo 5 (Oficial)'
    },
    {
      name: 'Corazón Serrano (Oficial)'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
