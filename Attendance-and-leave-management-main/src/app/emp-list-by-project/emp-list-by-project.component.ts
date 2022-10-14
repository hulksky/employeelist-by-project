import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-list-by-project',
  templateUrl: './emp-list-by-project.component.html',
  styleUrls: ['./emp-list-by-project.component.css']
})
export class EmpListByProjectComponent implements OnInit {
  empList! : Employee[];
  projForm! : FormGroup;

  constructor(private empService:EmployeeService,private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let empId=this.route.snapshot.params['id'];
    console.log('Emp id' + empId);
    this.projForm=new FormGroup(
      
      {"id":new FormControl(empId,Validators.required)  }
    );

    this.empService.getByProjectId(empId).subscribe(result =>{
      this.empList=result;
    },err=>{
      console.log(err);

    })
  }
  onSubmit(){
    console.log(this.projForm);
    this.empService.getByProjectId(this.projForm.value as unknown as number).subscribe(result =>{
      this.empList=result;
    },err=>{
      console.log(err);

    })

}
}
