import { Component, OnInit } from '@angular/core';
import { LicenciasService } from '../../services/licencias.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent implements OnInit {

  public data : any[] = [];
  public columns: any[] = [];

  constructor( private LicenciasService: LicenciasService ) { }

  ngOnInit(): void {
    this.setColumns();
    this.setTable();
    this.LicenciasService.getRestLicencias().subscribe( resp => resp)
  }

  setColumns(){
    this.columns = [
      { headerName: 'Id solicitud', field: 'id' },
      { headerName: 'Nombre', field: 'name' },
      { headerName: 'Apellido', field: 'surname' },
      { headerName: 'ID HR', field: 'tenant' },
      { headerName: 'CUIL', field: 'cuil' },
      { headerName: 'Licencia', field: 'typeLicense' },
      { headerName: 'Unidad Organizativa', field: 'workstation' },
      { headerName: 'Cargo', field: 'rol' },
      { headerName: 'Fecha de Inicio', field: 'initDate' },
      { headerName: 'Fecha de Fin', field: 'endingDate' },
      { headerName: 'Estado', field: 'gcbaLicenseStatus' },
    ]
  }
  
  setTable(){
    this.LicenciasService .getRestLicencias()
    .subscribe( (resp:any) => {

      this.data = resp.content.map((r:any)=>{
        return {
          jobPositionDescription : r.jobSector.description,
          descriptionOU: r.organizationalUnits[r.organizationalUnits.length - 1].descriptionOU,
          ...r//Desarma el objeto y lo incerta con el resto de las propiedades
        }
      })
   })
  }

}
