import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  coupon:Coupon =new Coupon()



 categories=['Clothing','Footwear','Electronics','Restaurants','Travel','Gifts','Home']
 
  categoryHasError=true;
  
  faUser = faUserCircle;
  errorMessage: string = "";

  validatecategory(value:string)
  {
    if(value==="default")
    {
      this.categoryHasError=true;
    }
    else
    {
      this.categoryHasError=false
    }
  }
  constructor(private companyservice:CompanyServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  register() {
    this.companyservice.register(this.coupon).subscribe(data=>{
      this.router.navigate(['/home']);
    },err=>{
      console.log(err);
      
    })
  }
}
