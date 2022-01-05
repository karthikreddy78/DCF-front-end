import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AddadminComponent } from './admin-functions/addadmin/addadmin.component';
import { DeleteuserComponent } from './admin-functions/deleteuser/deleteuser.component';
import { GetallusersComponent } from './admin-functions/getallusers/getallusers.component';
import { GetusersonroleComponent } from './admin-functions/getusersonrole/getusersonrole.component';
import { AdminComponent } from './admin/admin/admin.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { NotAuthorisedComponent } from './error/not-authorised/not-authorised.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './guest/home/home.component';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',
      component:UserProfileComponent,
      canActivate: [AuthGuard],
      data: { roles: ["ADMIN", "USER","COMPANY"]}
  },
  {path:'admin',component:AdminComponent,
  canActivate: [AuthGuard],
  data: {roles: ["ADMIN"]},
   children: [
    { path: '', redirectTo: "getallusers", pathMatch: 'full' },
    { path: "addadmin", component: AddadminComponent },
    { path: "deleteuser", component: DeleteuserComponent },
    { path: "getallusers", component: GetallusersComponent},
    { path: "getusersonrole", component: GetusersonroleComponent },
    { path: '**', redirectTo: "getallusers", pathMatch: 'full' }
  ]
  },
  {path:'company',component:CompanyProfileComponent,
  canActivate: [AuthGuard],
  data: {roles: ["COMPANY"]}
  },
  
  {path:'401',component:NotAuthorisedComponent},
  {path:'404',component:NotFoundComponent},
 // {path:"**",pathMatch: 'full',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private route:Router)
  {
    this.route.errorHandler=(error:any)=>{
      this.route.navigate(['/404'])
    }
  }
 }
