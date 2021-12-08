import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses;
  errorMsg = '';

  constructor(private _courseservice: CoursesService) {}

  ngOnInit(): void {
    this._courseservice.getCourses()
        .subscribe(
          data => { if(data){this.courses = data}
          error => this.errorMsg = error.statusText
            }
            //data => console.log('Success! ', data)}
          );
  }

}
