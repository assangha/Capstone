import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _url = 'https://cryptic-lake-82663.herokuapp.com/login';

  constructor(private _http:HttpClient) { }

  login(login: Login){
    return this._http.post<any>(this._url,login).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
