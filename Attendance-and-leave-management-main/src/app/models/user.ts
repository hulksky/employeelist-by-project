import { Designation } from "./designation";
import { Employee } from "./employee";
import { Role } from "./role";

export class User {
    id!:number;
    employeeId!:number;
    password!:string;
    employee!:Employee;
    role!:Role;




}