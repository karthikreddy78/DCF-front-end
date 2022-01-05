import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Coupon } from '../models/coupon.model';
import { AuthenticationServiceService } from './authentication-service.service';
import { RequestBaseService } from './request-base.service';



const API_URL = `${environment.BASE_URL}/company/company`;
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService extends RequestBaseService {

  
  constructor(authenticationService: AuthenticationServiceService, http: HttpClient) {
    super(authenticationService, http);
  }

  register(coupon: Coupon): Observable<any> {
    return this.http.post(API_URL + '/coupons/addcoupon', coupon, {headers: this.getHeaders});
  }
  
}
