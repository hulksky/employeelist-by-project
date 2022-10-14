import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Attendance } from '../models/attendance';
import { Status } from '../models/status';
import { AttendanceService } from '../services/attendance.service';

@Component({
  selector: 'app-update-attendance',
  templateUrl: './update-attendance.component.html',
  styleUrls: ['./update-attendance.component.css']
})
export class UpdateAttendanceComponent implements OnInit {
  attForm!:FormGroup;
  
  status=Status;
    constructor(private attService:AttendanceService,private router:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {      
      let attId=this.route.snapshot.params['id'];
      this.attService.getById(attId).subscribe(att=>{
      this.attForm =new FormGroup({
        
        "id": new FormControl(attId),
        "employeeId": new FormControl(att.employeeId,Validators.required),
        "dateTime": new FormControl(att.dateTime, Validators.required),
        "status": new FormControl(att.status, Validators.required)});

      },err=>{
        alert(err);
      });
    }



    onSubmit()
    {
      console.log(this.attForm.value);
        
      this.attService.update(this.attForm.value as unknown as Attendance).subscribe((res)=>{
          alert('Attendance updated successfully');
            this.router.navigate(['/attendance']);
        }, 
        (    err)=>{
          alert(err);
      
        })
    
         }
    isNumber(id:any):boolean{
      return typeof id=== 'number';
    }
  
  }