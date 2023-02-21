import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/transporteurs/';


@Injectable({
  providedIn: 'root'
})
export class TransporteurService {

  constructor(
    private http: HttpClient
  ) { }

  recuperereLesTransporteur():Observable<any>{
    return this.http.get(AUTH_API + "recupererlestransporteurenattente");
  }

  recuperereLesTransporteurAvecDemandeEncours():Observable<any>{
    return this.http.get(AUTH_API + "recupererlestransporteurenattenteencours");
  }

  recuperereLesTransporteurAvecDemandeRjeter():Observable<any>{
    return this.http.get(AUTH_API + "recupererlestransporteurenattenterejeter");
  }

  // recuperereLesTransporteurAvecDemandeAccepter():Observable<any>{
  //   return this.http.get(AUTH_API + "recupererlestransporteurenattenteAccepter");
  // }

  accepterTransporteur(numero:any):Observable<any>{
    return this.http.post(AUTH_API + `accepteratransporteur/${numero}`, {});
  }

  rejeterTransporteur(numero:any):Observable<any>{
    return this.http.post(AUTH_API + `rejetertransporteur/${numero}`, {});
  }
}
