import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Global } from '../app.global';

@Injectable()
export class CharactersService {
  constructor(private _http: HttpClient) {}

  getCharacters(): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/Personajes').subscribe(response => {
        resolve(response);
      })
    });
  }
  getCharactersById(id: string): Promise<any> {
    return new Promise((resolve) => {
      this._http.get(Global.urlApi + 'api/Series/PersonajesSerie/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
  newCharacter(character: any): Promise<any> {
    return new Promise((resolve) => {
      this._http.post(Global.urlApi + 'api/Personajes', character).subscribe(response => {
        resolve(response);
      })
    });
  }
  updateCharacter(idChar: any, idSerie: any): Promise<any> {
    var header = { 'Content-Type': 'application/json' };
    return new Promise((resolve) => {
      this._http.put(Global.urlApi + 'api/Personajes/' + idChar +  '/' + idSerie, idChar + idSerie, { headers: header }).subscribe(response => {
        resolve(response);
      })
    });
  }
  deleteCharacter(id: any): Promise<any> {
    return new Promise((resolve) => {
      this._http.delete(Global.urlApi + 'api/Personajes/' + id).subscribe(response => {
        resolve(response);
      })
    });
  }
}
