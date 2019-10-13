import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  headers: any;
  private socket: any;

  private ciudadesSource = new BehaviorSubject<any>([]);
  public ciudade$ = this.ciudadesSource.asObservable();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //this.socket = io.connect(environment.rutaSocket)
  }

  getCiudades() {
    return this.http.get<any>(`${environment.urlApi}${environment.service.ciudades.endpoint}`, this.headers);
  }

  /* onCiudadesClima(): Observable<any> {
    this.socket.on('climaCiudades', (res) => {
      this.ciudades.next(res);
    })
    return this.ciudadesClima();
  } */
}
