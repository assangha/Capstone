import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new Login('Email','password')
  submitted = false;
  errorMsg = '';

  constructor(private _login:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.submitted = true;
    this._login.login(this.loginModel).subscribe(
      data => console.log('Success! ', data),
      error => this.errorMsg = error.statusText,
      )
      if(this.errorMsg){
        this.submitted = true;
        this.router.navigate(['/Login', { id: 0 }]);
      }else{
        this.router.navigate(['/Courses', { id: 0 }])
      } 
    }

}
