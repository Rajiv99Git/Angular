import { Department } from "./department";

export class Employee {
    id: number;
    firstName: string ;
    lastName: string ;
    emailId: string ;
    deptId : number;
    active: boolean ;
    
}
export class EmployeeDetails{
    id: number;
    firstName: string ;
    lastName: string ;
    emailId: string ;
    dep: Department = new Department();
}