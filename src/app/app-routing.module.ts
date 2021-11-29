import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './pages/detail/detail.component';
import { AccionesComponent } from './pages/acciones/acciones.component';
import { Error404Component } from './shared/error404/error404.component';
import { LicenciasComponent } from './pages/licencias/licencias.component';
import { HistorialComponent } from './pages/historial/historial.component';

const routes: Routes = [
  {path: 'licencias', 
  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: '', redirectTo: 'licencias', pathMatch: 'full'},
  {path: '404', component: Error404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
