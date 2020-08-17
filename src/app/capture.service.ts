import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserInformation } from './data/user-information';

@Injectable({
  providedIn: 'root',
})
export class CaptureService {
  url = 'http://localhost:3000/capture';
  constructor(private http: HttpClient) {}
  // method to do a POST request
  capture(user: UserInformation) {
    // do a post request
    return this.http.post<any>(this.url, user);
  }
}
