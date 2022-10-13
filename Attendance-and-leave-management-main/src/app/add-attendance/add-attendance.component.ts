import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Attendance } from '../models/attendance';
import { Status } from '../models/status';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-add-attendance',
  templateUrl: './add-attendance.component.html',
  styleUrls: ['./add-attendance.component.css']
})
export class AddAttendanceComponent implements OnInit {

  attForm!:FormGroup;
  status=Status;
  
    constructor(private attService:AttendanceService,private router:Router) { }
  
    ngOnInit(): void {
      this.attForm=new FormGroup(
        {
         
          "employeeId":new FormControl("",Validators.required),
          "date":new FormControl("",Validators.required),
            "status":new FormControl(null,Validators.required)
            
        }
      );
  
    }
    onSubmit()
    {
      console.log(this.attForm.value);
      this.attService.add(this.attForm.value as unknown as Attendance).subscribe(result=>{
        alert('Attendance added successfully');
        //navigate back to the link
        
      }, err=>{
        console.log(err);
        alert(' attendance  additon failed');
      })
      
    }
    isNumber(id : any):boolean{
      return typeof id === 'number';
    }
  }
  
