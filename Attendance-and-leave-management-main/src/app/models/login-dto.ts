import { Role } from "./role";

export class LoginDto {
    employeeId!:number;
    username!:string;
    role!:Role;
    token!:String
}
