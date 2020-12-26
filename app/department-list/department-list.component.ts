import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Observable<Department[]>;

  constructor(private departmentService: DepartmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.departments = this.departmentService.getDepartmentList();
  }
  departmentUpdate(did: number){
    this.router.navigate(['updateDepartment', did]);
  }

  deleteDepartment(did: number) {
    this.departmentService.deleteDepartment(did)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  departmentDetails(did: number){
    this.router.navigate(['detailsDepartment', did]);
  }

}
