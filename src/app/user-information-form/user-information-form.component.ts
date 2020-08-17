import { CaptureService } from './../capture.service';
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
    password: null,
  };
  submitted = false;
  //copt data using spread syntax
  userInformation: UserInformation = { ...this.originalUserInformation };
  constructor(private captureService: CaptureService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log('form valid ? : ', form.valid);
    console.log(this.userInformation); // to be removed
    this.captureService.capture(this.userInformation).subscribe(
      (data) => console.log('Success!', data),
      (error) => console.log('Error!', error)
    );
  }
}
