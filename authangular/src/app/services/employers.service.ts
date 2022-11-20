import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';
import { User } from '../models/user';
import { Token } from '../models/token';

@Injectable()
export class EmployersService {
  constructor(private _http: HttpClient) {}

  validateUser(user: User): Promise<any> {
    return new Promise((resolve) => {
      var json = JSON.stringify(user);
      var header = { 'Content-Type': 'application/json' };
      this._http
        .post(Global.urlApi + 'Auth/Login', json, { headers: header })
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            resolve(error);
          }
        );
    });
  }

  setToken(token: Token) {
    // const tokenString:string = JSON.stringify(token);
    localStorage.setItem('token', token.response);
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');
    if (token != null) {
      return token;
    }
    return null;
  }

  deleteToken(): void {
    localStorage.clear();
  }

  setUser(User: any) {
    localStorage.setItem('user', User);
  }

  getUser(): any {
    let user = localStorage.getItem("user");
    if(user != null){
      return user
    }else{
      return null;
    }
  }

  getEmployers(token: string | null): Promise<any> {
    var header = { Authorization: 'bearer ' + token };
    return new Promise((resolve) => {
      this._http
        .get(Global.urlApi + 'api/Empleados', { headers: header })
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

  getEmployerById(token: string | null, id: any): Promise<any> {
    var header = { Authorization: 'bearer ' + token };
    return new Promise((resolve) => {
      this._http
        .get(Global.urlApi + 'api/Empleados/' + id, { headers: header })
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

  loadSubordinates(token: string | null): Promise<any> {
    var header = { Authorization: 'bearer ' + token };
    return new Promise((resolve) => {
      this._http
        .get(Global.urlApi + 'api/Empleados/Subordinados', { headers: header })
        .subscribe((response) => {
          resolve(response);
        });
    });
  }

  profileEmployer(token: string | null): Promise<any> {
    var header = { Authorization: 'bearer ' + token };
    return new Promise((resolve) => {
      this._http
        .get(Global.urlApi + 'api/Empleados/PerfilEmpleado', {
          headers: header,
        })
        .subscribe((response) => {
          resolve(response);
        });
    });
  }
}
