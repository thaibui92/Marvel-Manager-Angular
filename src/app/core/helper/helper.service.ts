import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Loader } from '@app/util';

@Injectable()
export class HelperService {

  constructor(private http: HttpClient) { }

  get(url: string, headers: any, params?: any, showLoading = false): Observable<any> {
    // tslint:disable-next-line:no-unused-expression
    showLoading && Loader.start();
    return this.http.get(url, { params })
      .pipe(finalize(() => showLoading && Loader.done()),
      catchError((error: any) => Observable.throw(error)));
  }

  post(url: string, headers?: any, params?: object, showLoading = false): Observable<any> {
    // tslint:disable-next-line:no-unused-expression
    showLoading && Loader.start();
    const options = (headers) ? { headers: headers } : { headers: { 'Content-Type': 'application/json' } };
    params = params || {};
    return this.http.post(url, params, options)
      .pipe(finalize(() => showLoading && Loader.done()),
      catchError((error: any) => Observable.throw(error)));
  }

}
