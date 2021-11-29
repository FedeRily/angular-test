import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LicenciasService } from '../../services/licencias.service';
import { Sweetalert2Service } from '../../services/sweetalert2.service';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css']
})
export class AccionesComponent implements OnInit {

  public accionesB: boolean = true;

  constructor(private router: Router ,private LicenciasService: LicenciasService, private Sweetalert2Service: Sweetalert2Service) { }

  ngOnInit(): void {
    if(this.LicenciasService.detail.gcbaLicenseStatus == 'ENTERED'){
      this.accionesB = true;
    } else {
      this.accionesB = false;
    }
  }

  rechazar(){
    this.Sweetalert2Service.rechazar(this.LicenciasService.detail.id)
  }

  aprobar(){
    this.Sweetalert2Service.aprobar(this.LicenciasService.detail.id)
  }

  reAsignar(){
    this.Sweetalert2Service.reAsignar(this.LicenciasService.detail.id)
  }

  auditar(){
    this.Sweetalert2Service.auditar(this.LicenciasService.detail.id)
  }

  anular(){
    this.Sweetalert2Service.anular(this.LicenciasService.detail.id)
  }

}
