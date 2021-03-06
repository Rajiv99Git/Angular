import { Employee, EmployeeDetails } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Department } from '../department';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  "strictPropertyInitialization": false
  id: number;
  did: number;
  employee: EmployeeDetails;
  dep: Department;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new EmployeeDetails();

    // tslint:disable-next-line:no-string-literal
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }
      // , error => console.log(error)
      );
  }

  list(){
    this.router.navigate(['employees']);
  }
}
