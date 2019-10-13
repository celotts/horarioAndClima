import { Component, OnInit } from '@angular/core';
import { CiudadesService } from './ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudades: any;

  constructor(private ciudadesService: CiudadesService) { }

  ngOnInit() {
    this.getTodasCiudades();
  }

  getTodasCiudades() {
    this.ciudadesService.getCiudades().subscribe(resCiudades => {
      this.ciudades = resCiudades;

    });
  }
}
