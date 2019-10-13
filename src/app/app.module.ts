import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared/shared.module';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { CiudadesService } from './ciudades/ciudades.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CiudadesComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [CiudadesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
