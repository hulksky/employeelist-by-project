import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Designation } from '../models/designation';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empForm!: FormGroup;
  empList!: Employee[];

  designation= Designation;
  
  constructor(private empService: EmployeeService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let empId=this.route.snapshot.params['id'];
    console.log('Emp id' + empId);
    
    this.empService.getEmpList().subscribe(list=>{
      this.empList=list;
    },err=>{
      console.log(err);
    })

    this.empForm= new FormGroup({
      "id": new FormControl(empId),
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
     this.empService.update(this.empForm.value as unknown as Employee).subscribe(result=>{
      alert('Employee updated successfully');
      //redirect to emp List
      this.router.navigate(['/employees']);
     },err=>{
      alert('Update employee failed');
     })
  }

  isNumber(id:any) : boolean{
     return typeof id === 'number'; 
  }
}
