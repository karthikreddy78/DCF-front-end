import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = "";
  role=""

  constructor(private authenticationService: AuthenticationServiceService, private router: Router) { }

  ngOnInit(): void {
    
    var iterator = this.authenticationService.currentUserValue.roles?.values();
    this.role=iterator?.next()?.value['role']
    if (this.authenticationService.currentUserValue?.id) {   
      console.log(this.authenticationService.currentUserValue?.id);
      this.router.navigate(['/user']);
      return;
      
    }
  }

  login() {
    this.authenticationService.login(this.user).subscribe(data => {

      if(data.roles[0].role ==='ADMIN')
      {
        this.router.navigate(['/admin']);
      }
      else if(data.roles[0].role ==='COMPANY')
      {
        this.router.navigate(['/company']);
      }
      else
      {
      this.router.navigate(['/user']);
      }
      console.log(data.roles[0].role);
      
    }, err => {
      this.errorMessage = 'Username or password is incorrect.';
      console.log(err);
    })
  }

}
