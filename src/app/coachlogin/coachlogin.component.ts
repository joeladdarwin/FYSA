import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coachlogin',
  templateUrl: './coachlogin.component.html',
  styleUrls: ['./coachlogin.component.css']
})
export class CoachloginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    options = [
    'Coach',
    'Manager',
    'Admin'
   ];


}
