import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class SeriesService {
  constructor(private _http: HttpClient) { }
  
  getSeries(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/Series').subscribe(response => {
        resolve(response);
      })
    });
  }
  getSerieById(id: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/Series/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
}
