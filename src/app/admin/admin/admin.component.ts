import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
