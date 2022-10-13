import { Designation } from "./designation";
import { Employee } from "./employee";
import { Role } from "./role";

export class User {
    id!:number;
    employeeId!:number;
    username!:string;
    password!:string;
    employee!:Employee;
    role!:Role;




}