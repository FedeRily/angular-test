import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  private apiUrl: string = 'https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77';
  private secretKey: string = '$2b$10$ULxnDsxE0lZNrZe6gPML/eFzpFQHH1DQjq90HzOkvtDum5mGBs1Ta';
  public detail: any

  constructor( private http: HttpClient ) { }

  getRestLicencias(){
    return this.http.get(this.apiUrl, {
      headers: { 'secret-key': this.secretKey }
    })
  }

}
