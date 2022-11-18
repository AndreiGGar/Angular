import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class EmployersService {
  constructor(private _http: HttpClient) {}

  getEmployers(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados').subscribe(response => {
        resolve(response);
      })
    });
  }
  getEmployerById(id: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
  getEmployersSalary(salary: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados/empleadossalario/' + salary).subscribe(response => {
        resolve(response);
      })
    });
  }
  getOffices(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados/oficios').subscribe(response => {
        resolve(response);
      })
    });
  }
  getEmployersOffice(office: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados/empleadosoficio/' + office).subscribe(response => {
        resolve(response);
      })
    });
  }
  getEmployersDepartment(department: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi2 + 'api/empleados/empleadosdepartamento/' + department).subscribe(response => {
        resolve(response);
      })
    });
  }
}
