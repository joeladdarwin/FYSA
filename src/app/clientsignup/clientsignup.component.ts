import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-clientsignup',
  templateUrl: './clientsignup.component.html',
  styleUrls: ['./clientsignup.component.css']
})


export class ClientsignupComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

  
  minDate = new Date(1950, 0, 1);
  maxDate = new Date(2012, 0, 1);
  
  myControl: FormControl = new FormControl();

  options = [
    'Male',
    'Female',
   ];

  panelOpenState: boolean = false;

  hide = true;

   email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Please enter your email' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

}
