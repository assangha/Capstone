import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from './Student';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'https://cryptic-lake-82663.herokuapp.com/register';

  constructor(private _http:HttpClient) { }

  register(student: Student){
    return this._http.post<any>(this._url,student).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
  
}
