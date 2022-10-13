import { Role } from "./role";

export class LoginDto {
    employeeId!:number;
    role!:Role;
    token!:String
}
