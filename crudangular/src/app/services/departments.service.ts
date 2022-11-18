import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class DepartmentsService {
  constructor(private _http: HttpClient) { }

  getDepartments(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/departamentos').subscribe(response => {
        resolve(response);
      })
    });
  }
  getDepartmentById(id: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/departamentos/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
  addDepartment(department: any): Promise<any> {
    return new Promise((resolve) => {
      var json = JSON.stringify(department);
      var header = { 'Content-Type': 'application/json' };
      this._http.post(Global.urlApi + 'api/departamentos', json, { headers: header }).subscribe(response => {
        resolve(response);
      })
    });
  }
  updateDepartment(department: any): Promise<any> {
    return new Promise((resolve) => {
      var json = JSON.stringify(department);
      var header = { 'Content-Type': 'application/json' };
      this._http.put(Global.urlApi + 'api/departamentos', json, { headers: header }).subscribe(response => {
        resolve(response);
      })
    });
  }
  deleteDepartment(id: number): Promise<any> {
    return new Promise((resolve) => {
      this._http.delete(Global.urlApi + 'api/departamentos/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
}
