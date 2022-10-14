import { Component, OnInit } from '@angular/core';
import { Leave } from '../models/leave';
import { LeaveType } from '../models/leave-type';
import { StatusType } from '../models/status-type';
import { LeaveService } from '../services/leave.service';

@Component({
  selector: 'app-leave-list',
  templateUrl: './leave-list.component.html',
  styleUrls: ['./leave-list.component.css']
})
export class LeaveListComponent implements OnInit {
  leaveList!:Leave[];
  statustype = StatusType;
  leavetype = LeaveType;

  constructor(private leaveService:LeaveService) { }

  ngOnInit(): void {
    this.leaveService.getLeaveList().subscribe(list=>{
      //console.log(list);
      this.leaveList=list;
    },err=>{
      console.log(err);
      alert('API call failed');
    })
  }

}
