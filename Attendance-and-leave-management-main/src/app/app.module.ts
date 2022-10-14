import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { AddAttendanceComponent } from './add-attendance/add-attendance.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';
import { JwtInterceptor } from './services/jwt.interceptor';
import { LeaveListComponent } from './leave-list/leave-list.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    ChangePasswordComponent,
    AddProjectComponent,
    ProjectListComponent,
    UpdateProjectComponent,
    AttendenceListComponent,
    AddAttendanceComponent,
    UpdateAttendanceComponent,
    LeaveListComponent,
    AddLeaveComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
   
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 