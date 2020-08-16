import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserInformation } from './../data/user-information';

@Component({
  selector: 'app-user-information-form',
  templateUrl: './user-information-form.component.html',
  styleUrls: ['./user-information-form.component.css'],
})
export class UserInformationFormComponent implements OnInit {
  // form model, gonna use 2-way data binding to change these
  // values when form is filled
  originalUserInformation: UserInformation = {
    firstName: null,
    lastName: null,
    aNumber: null,
    cellNumber: null,
    email: null,
  };
  //copt data using spread syntax
  userInformation: UserInformation = { ...this.originalUserInformation };
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('in onsubmit  : ', form.valid);
  }
}
