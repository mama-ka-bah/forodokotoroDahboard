import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/produitagricoles/';
const AUTH_API1 = 'http://localhost:8081/varietes/';
const AUTH_API2 = 'http://localhost:8081/previsions/';


@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  constructor(private http: HttpClient) { }

    //permet de recuperer les produit agricoles depuis la base des données, le nom doit etre corrigé
    recupererProduitsAgricoles(): Observable<any> {
      return this.http.get(AUTH_API + "produitagricoleactives");
    }

  ajouterProduit(idcreateur:any, produit:any): Observable<any>{
    return this.http.post(AUTH_API + `ajouter/${idcreateur}`, produit);
  }

  ajouterVariete(idcreateur:any,idproduit:any, varietes:any): Observable<any>{
    return this.http.post(AUTH_API1 + `ajouter/${idproduit}/${idcreateur}`, varietes);
  }

  ajouterSimulation(idcreateur:any, simulation:any): Observable<any>{
    return this.http.post(AUTH_API2 + `ajouter/${idcreateur}`, simulation);
  }

   //permet de recuperer les varietes d'un produit agricoles
   recupererLesVarietesDunProduitAgricole(idProduitAgricole:any): Observable<any> {
    return this.http.get(AUTH_API1 + `recuperervarietesparproduit/${idProduitAgricole}`);
  }


}
