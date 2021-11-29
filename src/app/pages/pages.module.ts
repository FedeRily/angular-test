import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DetailComponent } from './detail/detail.component';
import { AccionesComponent } from './acciones/acciones.component';
import { HistorialComponent } from './historial/historial.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LicenciasComponent,
    DetailComponent,
    AccionesComponent,
    HistorialComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
