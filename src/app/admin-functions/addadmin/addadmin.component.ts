import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  faUser = faUserCircle;
  userList:Array<User>=[]
  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
      this.adminService.getAllUsers().subscribe(data=>{
        this.userList=data
      }, err => {
        console.log(err);
      })
  }

}
