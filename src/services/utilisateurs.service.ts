import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//url de mon controlleur d'authentification
const AUTH_API = 'http://localhost:8081/api/auth/';
const AUTH_API1 = 'http://localhost:8081/transporteurs/';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) { }

  // fonction permettant de gerer la connexion
  login(username: any, password: any): Observable<any> {
    console.table("username: " + username);
    console.table("mot de passe" + password);
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      }
    );
  }

    // fonction permettant de gerer l'inscription
  
    register(donneesuser:any): Observable<any> {
    const data:FormData=new FormData();

    data.append('donneesuser', JSON.stringify(donneesuser).slice(1,JSON.stringify(donneesuser).lastIndexOf(']')));

    console.log(data);
    
    return this.http.post(
      AUTH_API + 'signup',
      data
    );
  }

}
