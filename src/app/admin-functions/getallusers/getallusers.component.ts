import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { User } from 'src/app/models/user.model';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-getallusers',
  templateUrl: './getallusers.component.html',
  styleUrls: ['./getallusers.component.css']
})
export class GetallusersComponent implements OnInit {

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
