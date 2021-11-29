import { Injectable } from '@angular/core';

import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class Sweetalert2Service {

  constructor() { }

  rechazar(data: number){
    Swal.fire({
      icon: 'success',
      title: 'RECHAZADA',
      text: `La solicitud ${data} fue rechazada con éxito`
    })
  }
  
  aprobar(data: number){
    Swal.fire({
      icon: 'success',
      title: 'APROBADA',
      text: `La solicitud ${data} fue aprobada con éxito`
    })
  }

  reAsignar(data: number){
    Swal.fire({
      icon: 'success',
      title: 'RE ASIGNADA',
      text: `La solicitud ${data} fue re asignada con éxito`
    })
  }

  auditar(data: number){
    Swal.fire({
      icon: 'success',
      title: 'AUDITADA',
      text: `La solicitud ${data} fue enviada auditada con éxito`
    })
  }

  anular(data: number){
    Swal.fire({
      icon: 'success',
      title: 'ANULADA',
      text: `La solicitud ${data} fue anulada con éxito`
    })
  }

  change(data: number){
    Swal.fire({
      icon: 'success',
      title: 'GUARDADA',
      text: `La solicitud ${data} fue guardada correctamente`
    })
  }

}
