import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Leave } from '../models/leave';
import { LeaveType } from '../models/leave-type';
import { Project } from '../models/project';
import { StatusType } from '../models/status-type';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {
  leaveForm!:FormGroup;
  statustype = StatusType;
  leavetype = LeaveType; 

  constructor(private leaveService:LeaveService,private router:Router) { }

  ngOnInit(): void {
    this.leaveForm = new FormGroup({
    employeeId: new FormControl("", Validators.required),
    leaveType: new FormControl("", Validators.required),
    statusType:new FormControl("",Validators.required),
    managerId:new FormControl("",Validators.required),
    requestedDays: new FormControl("", Validators.required),
    startDate: new FormControl("", Validators.required),
    endDate: new FormControl("", Validators.required),
    reason: new FormControl("", Validators.required)});​​​​​​​  
  
    }

  onSubmit(){
    console.log(this.leaveForm);
    this.leaveService.add(this.leaveForm.value as unknown as Leave).subscribe(res=> {
      console.log(res);
      this.router.navigate(['/home']);
    },err=>{
      alert("leave Request Failed");
    });

  }

  isNumber(id:any) : boolean{
    return typeof id === 'number'; 
 }


}
