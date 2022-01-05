import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { AuthenticationServiceService } from './services/authentication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DCF-App';
  currentUser: User = new User;
  role:string="";

  constructor(private authenticationService: AuthenticationServiceService, private router: Router) {
    
    this.authenticationService.currentUser.subscribe(data => {
      this.currentUser = data;
      //console.log((this.currentUser.roles));
      var iterator = this.currentUser.roles?.values();
     
      
        this.role=iterator?.next()?.value['role']
      console.log(this.role);
      
      //this.role= data.roles[0].role;
    });
  }
  ngOnInit(): void {
    
  }

  isAdmin() {
    //console.log(this.role);
    
    return this.role === "ADMIN";
  }

  isCompany()
  {
    return this.role === "COMPANY";
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
  }

  properRole()
  {
    if(this.isAdmin())
    {
      this.router.navigate(['/admin']);
    }
    else if(this.isCompany())
    {
      this.router.navigate(['/company']);
    }
    else
    {
      this.router.navigate(['/user']);
    }
  }
}
