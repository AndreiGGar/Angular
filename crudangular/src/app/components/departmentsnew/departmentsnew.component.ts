import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmentsnew',
  templateUrl: './departmentsnew.component.html',
  styleUrls: ['./departmentsnew.component.css'],
})
export class DepartmentsnewComponent implements OnInit {
  public department!: Department;
  @ViewChild('deptNumber') number!: ElementRef;
  @ViewChild('deptName') name!: ElementRef;
  @ViewChild('deptLocation') location!: ElementRef;

  constructor(
    private _departmentsService: DepartmentsService,
    private _router: Router
  ) {}

  addDepartment() {
    // this.department = {
    //   numero: parseInt(this.number.nativeElement.value),
    //   nombre: this.name.nativeElement.value,
    //   localidad: this.location.nativeElement.value,
    // };
    var numero = parseInt(this.number.nativeElement.value);
    var nombre = this.name.nativeElement.value;
    var localidad = this.location.nativeElement.value;
    var department = new Department(numero, nombre, localidad);
    this._departmentsService
      .addDepartment(department)
      .then((response: any) => {
        this._router.navigate(['/departments']);
      });
  }

  ngOnInit(): void {}
}
