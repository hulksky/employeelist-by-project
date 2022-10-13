import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empForm!: FormGroup;
  empList!: Employee[];

  designation= Designation;
  
  constructor(private empService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.empService.getEmpList().subscribe(list=>{
      this.empList=list;
    },err=>{
      console.log(err);
    })

    this.empForm= new FormGroup({
      
      "name": new FormControl("",Validators.required),
      "dateOfBirth": new FormControl("",Validators.required),
      "managerId": new FormControl("",Validators.required),
      "email": new FormControl("",[Validators.required,Validators.email]),
      "mobileNo": new FormControl("",[Validators.required]),
      "projectId": new FormControl("",Validators.required),
      "designation": new FormControl("",Validators.required),
      
    });
  }

  onSubmit(){
    console.log(this.empForm);
     //services
     this.empService.add(this.empForm.value as unknown as Employee).subscribe(result=>{
      alert('Employee added successfully');
      //redirect to emp List
      this.router.navigate(['/employees']);
     },err=>{
      alert('Add employee failed');
     })
  }

  isNumber(id:any) : boolean{
     return typeof id === 'number'; 
  }

}

