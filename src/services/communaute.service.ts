import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/publications/';

@Injectable({
  providedIn: 'root'
})
export class CommunauteService {

  constructor(private http: HttpClient) { }

  //recuperere Toutes Les Publications Ordonnees Par Date Pub
  recupererToutesLesPublicationsOrdonneesParDatePub(): Observable<any> {
    return this.http.get(AUTH_API + 'recuperertouspublications');
  }
}
