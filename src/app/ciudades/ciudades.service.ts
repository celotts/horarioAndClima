import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  headers: any;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getCiudades() {
    return this.http.get<any>(`${environment.urlApi}${environment.service.ciudades.endpoint}`, this.headers);
  }

  getTemperatura() {
    return this.http.get<any>(`${environment.urlApi}${environment.service.temperaturas.endpoint}`, this.headers);
  }
}
