import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RESTLicencias } from '../../interfaces/rest-licencias';
import { LicenciasService } from '../../services/licencias.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public dataLicencia!: RESTLicencias;
  public arrayPersonal: any[] = [];
  public arrayDataPersonal: any[] = [];

  constructor(private router: Router, private LicenciasService: LicenciasService ) { }

  ngOnInit(): void {
    this.dataLicencia = this.LicenciasService.detail;
    this.arrayPersonal = ["ID HR","Nombre","Apellido","CUIL"];
    this.arrayDataPersonal = [this.dataLicencia.user.businessId,this.dataLicencia.user.name,this.dataLicencia.user.surname,this.dataLicencia.user.cuil]
  }

}
