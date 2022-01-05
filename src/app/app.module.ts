import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './guest/login/login.component';
import { RegisterComponent } from './guest/register/register.component';
import { HomeComponent } from './guest/home/home.component';

import { AdminComponent } from './admin/admin/admin.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { NotAuthorisedComponent } from './error/not-authorised/not-authorised.component';

import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CompanyProfileComponent } from './company/company-profile/company-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GetallusersComponent } from './admin-functions/getallusers/getallusers.component';
import { GetusersonroleComponent } from './admin-functions/getusersonrole/getusersonrole.component';
import { AddadminComponent } from './admin-functions/addadmin/addadmin.component';
import { DeleteuserComponent } from './admin-functions/deleteuser/deleteuser.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    NotFoundComponent,
    NotAuthorisedComponent,
    UserProfileComponent,
    CompanyProfileComponent,
    GetallusersComponent,
    GetusersonroleComponent,
    AddadminComponent,
    DeleteuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
