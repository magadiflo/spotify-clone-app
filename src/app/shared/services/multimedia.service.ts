import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(res => {
      if (res) {
        this.setAudio(res);
      }
    });
  }

  public setAudio(track: TrackModel): void {
    console.log('setAudio(...)', track);
    this.audio.src = track.url;
    this.audio.play();
  }

}
