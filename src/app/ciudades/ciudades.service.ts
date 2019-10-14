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
  public ciudades$ = this.ciudadesSource.asObservable();

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    this.socket = io(environment.urlApi);
    this.onCiudadesClima();
  }

  getCiudades() {
    return this.http.get<any>(`${environment.urlApi}${environment.service.ciudades.endpoint}`, this.headers);
  }

  onCiudadesClima(): void {
    this.socket.on('connect', (res) => {
      console.log("Conectado con el servidor");
      this.ciudadesSource.next(res);
    });

    this.socket.on('disconnect', () => {
      console.log("Se perdió conexión con el servidor");
    });

    // Emitir
    this.socket.emit('solicitarInformacion', () => {

    });

    //Escuchar
    this.socket.on("enviarData", (resData) => {
      console.log("se recibe la data:", resData);
    })
  }


  /* ciudadesClima(): Observable<any> {
    console.log("eeeeeeeeeeee");
    return new Observable(mensaje => {
      console.log("qqqqq", mensaje);
      //this.ciudades = mensaje;
    });
  } */
}
