import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';
import { TrackModel } from '../../core/models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00');
  public audio!: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe(res => {
      if (res) {
        this.setAudio(res);
      }
    });

    this.listenAllEvents();
  }

  public setAudio(track: TrackModel): void {
    console.log('setAudio(...)', track);
    this.audio.src = track.url;
    this.audio.play();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
  }

  private calculateTime = (): void => {
    console.log('Disparando evento');
    const { duration, currentTime } = this.audio;
    console.table([duration, currentTime]);
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
  }

  private setTimeElapsed(currentTime: number): void {
    const displayFormat = this.getTimeFormat(currentTime, '');
    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number): void {
    let timeLeft = duration - currentTime;
    const displayFormat = this.getTimeFormat(timeLeft, '-');
    this.timeRemaining$.next(displayFormat);
  }

  private getTimeFormat(time: number, symbol: string): string {
    let seconds = Math.floor(time % 60);
    let minutes = Math.floor((time / 60) % 60);

    const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
    const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;

    return `${symbol}${displayMinutes}:${displaySeconds}`;
  }

}
