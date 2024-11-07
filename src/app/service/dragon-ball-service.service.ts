// services/dragon-ball.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Character, ApiResponse } from '../interfaces/drangon-ball.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = 'https://dragonball-api.com/api/';

  constructor(private http: HttpClient) { }

  getCharacters(page: number = 1, limit: number = 20): Observable<ApiResponse<Character>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<ApiResponse<Character>>(`${this.apiUrl}characters`, { params })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}characters/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
