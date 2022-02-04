import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    return this.http.post(`${this.URL}/auth/login`, { email, password })
      .pipe(
        catchError(err => of(false))
      );
  }

}
