import { Status } from "./status";

export class Attendance {
    id!:number;
    employeeId!:number;
    dateTime!:Date;
    status!:Status;
}
