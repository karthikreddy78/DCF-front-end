import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export abstract class RequestBaseService {

  protected currentUser: User = new User;

  protected constructor(protected authenticationService: AuthenticationServiceService, protected http: HttpClient) {
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  get getHeaders(): HttpHeaders {
    return new HttpHeaders(
      {
        'Authorization': 'Bearer ' + this.currentUser?.token,
        'Content-Type': 'application/json'
      }
         );
  }
}
