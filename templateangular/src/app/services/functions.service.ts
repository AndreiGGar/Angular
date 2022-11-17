import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class FunctionsService {
  constructor(private _http: HttpClient) {}

  getFunctions(select: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + select).subscribe(response => {
        resolve(response);
      })
    });
  }
  getTemplates(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/Plantilla/Funciones').subscribe(response => {
        resolve(response);
      })
    });
  }
}
