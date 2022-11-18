import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  departments!: Department[];

  constructor(private _departmentsService: DepartmentsService) {
  }

  getDepartments() {
    this._departmentsService.getDepartments().then((response: any) => {
      this.departments = response;
    });
  }

  ngOnInit(): void {
    this.getDepartments();
  }
}
