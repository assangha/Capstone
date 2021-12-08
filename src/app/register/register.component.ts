import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentModel = new Student('First Name','Last Name','Email','password','password')
  submitted = false;
  errorMsg = '';

  constructor(private _register:RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.submitted = true;
    this._register.register(this.studentModel).subscribe(
      data => console.log('Success! ', data),
      error => this.errorMsg = error.statusText
      )
      if(!this.errorMsg){
        this.submitted = true;
        this.router.navigate(['/Login', { id: 0 }]);
      } 
    }
}
