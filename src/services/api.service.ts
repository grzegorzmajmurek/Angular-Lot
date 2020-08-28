import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LostLuggage} from '../model';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  lostLuggage$: Observable<LostLuggage> = null;

  constructor(private http: HttpClient) {
  }

  recommend(): Observable<any> {
    return this.http.get('/api/recommend').pipe(
      catchError(this.handleError)
    );
  }

  lostLuggage(): Observable<LostLuggage> {
    if (this.lostLuggage$ === null) {
      this.lostLuggage$ = this.http.get('/api/lostluggage').pipe(
        catchError(this.handleError)
      );
    }
    return this.lostLuggage$;
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
