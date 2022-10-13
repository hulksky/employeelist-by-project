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

  empList! :Employee[];
  designation=Designation;
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(list=>{
      console.log(list);
      this.empList=list;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }


}
