import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AccionesComponent } from './acciones/acciones.component';
import { HistorialComponent } from './historial/historial.component';
import { LicenciasComponent } from './licencias/licencias.component';

const routes: Routes = [
{
  path: '', children: [
    {path: '', component: LicenciasComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'acciones/:id', component: AccionesComponent},
    {path: 'historial/:id', component: HistorialComponent}
  ]
},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
