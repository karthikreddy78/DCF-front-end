import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';
import { AuthenticationServiceService } from 'src/app/services/authentication-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles=["USER","COMPANY"]
 
  roleHasError=true;
  




  user: User = new User();
  faUser = faUserCircle;
  errorMessage: string = "";

  validateRole(value:string)
  {
    if(value==="default")
    {
      this.roleHasError=true;
    }
    else
    {
      this.roleHasError=false
    }
  }
  constructor(private authenticationService: AuthenticationServiceService, private router: Router) { }

  ngOnInit(): void {
    if (this.authenticationService.currentUserValue?.id) {
      this.router.navigate(['/user']);
      return;
    }
  }

  register() {
    this.authenticationService.register(this.user).subscribe(data => {
      this.router.navigate(['/login']);
    }, err => {
      if (err?.status === 409) {
        this.errorMessage = 'Username already exist.';
      } else {
        this.errorMessage = 'Unexpected error occurred. Error is: ' + err?.errorMessage;
        console.log(err);
      }
    })
  }


}
