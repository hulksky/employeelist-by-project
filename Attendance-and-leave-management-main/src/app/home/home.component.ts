import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import {  Employee } from '../models/employee';
import { Project } from '../models/project';
import { EmployeeService } from '../services/employee.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empid!:number;
  project!:Project;
  empList! :Employee;
  designation=Designation;
  constructor(private empService:EmployeeService, private projService:ProjectService) { }

  ngOnInit(): void {
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    this.empid = values.employeeId;
    this.empService.getListById(this.empid).subscribe(emp=>{
      //console.log(emp);
      this.empList=emp;
      //console.log(this.empList);
      //console.log("test");

      this.projService.getById(this.empList.projectId).subscribe(proj =>{
        this.project = proj;
        //console.log(this.project);
      },err => {
        console.log(err);
      });
    },err=>{
      console.log(err);
      alert('API call failed');
    });
  }


}
