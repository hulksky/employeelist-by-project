import { Employee } from "./employee";
import { LeaveType } from "./leave-type";
import { StatusType } from "./status-type";

export class Leave {
    id!:number;
    employeeId!:number;
    employee!:Employee;
    leaveType!:LeaveType;
    requestedDays!:number;
    startDate!:Date;
    endDate!:Date;
    statusType!:StatusType;
    reason!:string;
    managerId!:number;

}
