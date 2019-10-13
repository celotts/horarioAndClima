import { Component, OnInit } from '@angular/core';
import { CiudadesService } from './ciudades/ciudades.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private ciudadService: CiudadesService) { }
  title = 'horaTemperaturaCiudad';
  ngOnInit() {

  }

}
