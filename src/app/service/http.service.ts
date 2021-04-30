import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any): Observable<never> {
    return throwError(error.error);
  }

  //   public get(
  //     path: string,
  //     params: HttpParams = new HttpParams()
  //   ): Observable<any> {
  //     return this.http.get(path, { params }).pipe(catchError(this.formatErrors));
  //   }

  public get<T>(
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<T> {
    return this.http
      .get<T>(path, { params })
      .pipe(catchError(this.formatErrors));
  }

  public post(path: string, body: object = {}): Observable<any> {
    return this.http
      .post(path, JSON.stringify(body))
      .pipe(catchError(this.formatErrors));
  }
}
