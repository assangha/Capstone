import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sent=false;
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router) { }

  onSubmit(FormData) {
    console.log(FormData);
    this.sent=true;
    this.contact.PostMessage(FormData).subscribe(response => {
      location.href = 'https://mailto:ajaisangha@gmail.com'
      console.log(response)
    }, error => {
      console.warn(error.responseText)
      console.log({ error })
    })
  }

  ngOnInit() {
    this.sent=false;
    this.FormData = this.builder.group({
    Fullname: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
    Message: new FormControl('', [Validators.required])})}

}
