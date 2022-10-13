import { Designation } from "./designation";

export class Employee {
    id!: number;
    name!: string;
    dateOfBirth!: Date;
    managerId!: number;
    email!: string;
    mobileNo!: number;
    projectId!: number;
    designation!: Designation;
}
