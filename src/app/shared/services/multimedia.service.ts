import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback: EventEmitter<any> = new EventEmitter<any>();
  // myObservable1$: Observable<any> = new Observable();
  // myObservable1$: Subject<any> = new Subject();
  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('Inicializado con agua...');
// 

  constructor() {
    /*********** Observable **************** */
    // this.myObservable1$ = new Observable((observer: Observer<any>) => {
    //   observer.next('Sí, agua...');
    //   observer.complete();
    //   observer.error('Hubo un error papi...');
    // });

    //************* Subject y BehaviorSubject **************** */
    setTimeout(() => {
      this.myObservable1$.next('enviandoo agua desde multimedia...');
    }, 1000);

    setTimeout(() => {
      this.myObservable1$.error('set tapó la tubería');
    }, 2000);

    setTimeout(() => {
      this.myObservable1$.complete();
    }, 3000);

    
  }

}
