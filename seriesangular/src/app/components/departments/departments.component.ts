import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-movies',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public departments!: Department[];

  constructor(private _departmentsService: DepartmentsService) { }

  getDepartments() {
    this._departmentsService.getDepartments().then((response: any) => {
      this.departments = response;
    });
  }

  deleteDepartment(id: number) {
    this._departmentsService.deleteDepartment(id).then((response: any) => {
      this.getDepartments();
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }

}
