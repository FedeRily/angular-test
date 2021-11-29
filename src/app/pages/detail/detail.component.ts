import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { RESTLicencias } from '../../interfaces/rest-licencias';
import { LicenciasService } from '../../services/licencias.service';
import { Sweetalert2Service } from '../../services/sweetalert2.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public arrayPersonal: any[] = [];
  public arrayDataPersonal: any[] = [];
  public arrayLicencia: any[] = [];
  public arrayDataLicencia: any[] = [];//arrayData
  public arrayDataLicenciaEdit: any[] = [];
  public editB: boolean = true;
  public stateB: boolean = false;
  public dataLicencia!: RESTLicencias;

  constructor(private router: Router, private LicenciasService: LicenciasService, private Sweetalert2Service: Sweetalert2Service) { }

  ngOnInit(): void {
    this.editB = true;
    this.dataLicencia = this.LicenciasService.detail;
    if(this.dataLicencia.gcbaLicenseStatus == 'ENTERED'){
      this.stateB = true;
    } else { this.stateB = false }
    this.arrayPersonal = ["ID HR","Nombre","Apellido","CUIL"];
    this.arrayDataPersonal = [this.dataLicencia.user.businessId,this.dataLicencia.user.name,this.dataLicencia.user.surname,this.dataLicencia.user.cuil];
    this.arrayLicencia = ["Licencia","Unidad organizativa","Cargo","Diagnotico médico","Decisiones médicas","Fecha de inicio","Fecha de fin","Estado"]
    this.arrayDataLicencia = [this.dataLicencia.typeLicense.description,this.dataLicencia.organizationalUnits[0].descriptionOU,this.dataLicencia.jobSector.description,this.dataLicencia.medicDiagnostic.category,this.dataLicencia.medicalDecisions,this.dataLicencia.initDate,this.dataLicencia.endingDate,this.dataLicencia.gcbaLicenseStatus];
    this.arrayDataLicenciaEdit = [this.dataLicencia.typeLicense.description,this.dataLicencia.organizationalUnits[0].descriptionOU,this.dataLicencia.jobSector.description,this.dataLicencia.medicDiagnostic.category,this.dataLicencia.medicalDecisions];
  }

  edit(){
    if(this.editB){
      this.editB = false;
    }else{
      this.editB = true;
    }
  }

  change(data: number){
    this.Sweetalert2Service.change(data)
  }

  rechazar(data: number){
    this.Sweetalert2Service.rechazar(data)
  }
  
  aprobar(data: number){
    this.Sweetalert2Service.aprobar(data)
  }

  reAsignar(data: number){
    this.Sweetalert2Service.reAsignar(data)
  }

  auditar(data: number){
    this.Sweetalert2Service.auditar(data)
  }

  anular(data: number){
    this.Sweetalert2Service.anular(data)
  }

}
