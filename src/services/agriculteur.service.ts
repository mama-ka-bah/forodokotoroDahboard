import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/agriculteur/';

const AUTH_API1 = 'http://localhost:8081/champs/';
const AUTH_API2 = 'http://localhost:8081/cultive/';


@Injectable({
  providedIn: 'root'
})
export class AgriculteurService {

  constructor(
    private http: HttpClient
  ) {}

  recuperereLesAgriculteurs():Observable<any>{
    return this.http.get(AUTH_API + "recupererlesagriculteurenattenteAccepter")
  }

  recuperereLesAgriculteursAvecDemandeEncours():Observable<any>{
    return this.http.get(AUTH_API + "recupererlesagriculteurenattente")
  }

  recuperereLesAgriculteursAvecDemandeRjeter():Observable<any>{
    return this.http.get(AUTH_API + "recupererlesagriculteurenattenterejeter")
  }

  recuperereLesAgriculteursAvecDemandeAccepter():Observable<any>{
    return this.http.get(AUTH_API + "recupererlesagriculteurenattenteAccepter")
  }

  accepterAgriculteur(numero:any):Observable<any>{
    return this.http.post(AUTH_API + `accepteragriculteur/${numero}`, {});
  }

  rejeterAgriculteur(numero:any):Observable<any>{
    return this.http.post(AUTH_API + `rejeteragriculture/${numero}`, {});
  }


  recupererTousLesChamp():Observable<any>{
    return this.http.get(AUTH_API1 + "recupererchampactives");
  }

  recupererTousLesParserelle():Observable<any>{
    return this.http.get(AUTH_API1 + "recupererlesparsserelle");
  }

  recupererTousLesCultive():Observable<any>{
    return this.http.get(AUTH_API2 + "recupererlescultive");
  }

  



}
