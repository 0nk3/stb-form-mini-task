import { Component, OnInit } from '@angular/core';

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
    firstName: 'Onke',
    lastName: 'Fanti',
    aNumber: 'a123456',
    cellNumber: '011 233 111',
    email: '0nk3.0nk3@gmail.com',
  };
  //copt data
  userInformation: UserInformation = { ...this.originalUserInformation };
  constructor() {}

  ngOnInit(): void {}
}
