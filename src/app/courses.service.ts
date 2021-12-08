import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from './Course';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private _url: string = "https://cryptic-lake-82663.herokuapp.com/courses";

  constructor(private http: HttpClient) { }

  getCourses():Observable<Course>{
    return this.http.get<Course>(this._url);
  }

}
