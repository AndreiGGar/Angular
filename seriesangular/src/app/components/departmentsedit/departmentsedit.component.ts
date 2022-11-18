import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../models/department';

@Component({
  selector: 'app-departmentsedit',
  templateUrl: './departmentsedit.component.html',
  styleUrls: ['./departmentsedit.component.css']
})
export class DepartmentseditComponent implements OnInit {
  public department!: Department;
  public newDepartment!: Department;
  public id!: any;

  @ViewChild('deptNumber') number!: ElementRef;
  @ViewChild('deptName') name!: ElementRef;
  @ViewChild('deptLocation') location!: ElementRef;

  constructor(
    private _service: DepartmentsService, private _activeRoute: ActivatedRoute, private _router: Router
  ) {}

  updateDepartment() {
    var numero = parseInt(this.number.nativeElement.value);
    var nombre = this.name.nativeElement.value;
    var localidad = this.location.nativeElement.value;
    var newDepartment = new Department(numero, nombre, localidad);
    this._service.updateDepartment(newDepartment).then((response: any) => {
      this._router.navigate(['/departments']);
    });
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id'] != null) {
        this.id = parseInt(params['id']);
        this._service.getDepartmentById(this.id).then((response: any) => {
          this.department = response;
        });
      }
    });
  }

}
