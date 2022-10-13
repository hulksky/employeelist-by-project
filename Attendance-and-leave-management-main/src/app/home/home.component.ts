import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import {  Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  empid!:number;
  empList! :Employee;
  designation=Designation;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    var values = JSON.parse(localStorage.getItem('UserInfo') || '{}');    
    this.empid = values.employeeId;
    this.empService.getListById(this.empid).subscribe(emp=>{
      console.log(emp);
      this.empList=emp;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }


}
