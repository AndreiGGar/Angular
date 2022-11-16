import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class PersonService {
  constructor(private _http: HttpClient) {}

  getPersonas(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi).subscribe(response => {
        resolve(response);
      })
    });
  }
}

// @Injectable()
// export class PersonService {
//   constructor(private _http: HttpClient) {}

//   getPersonas(): Observable<any> {
//     var url =
//       "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
//     return this._http.get(url);
//   }
// }
