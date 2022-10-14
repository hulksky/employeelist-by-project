import { Employee } from "./employee";
import { Status } from "./status";

export class Attendance {
    id!:number;
    employeeId!:number;
    employee!:Employee;
    dateTime!:Date;
    status!:Status;
}
