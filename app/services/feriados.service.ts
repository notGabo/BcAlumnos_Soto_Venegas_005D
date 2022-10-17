import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feriado } from '../Interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {



  constructor(private http: HttpClient) { }

  getFeriados() {
    return this.http.get<Feriado[]>('https://apis.digital.gob.cl/fl/feriados/2022');
  }
}
