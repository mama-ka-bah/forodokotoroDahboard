import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/notifications/';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }


  
  //permet de recuperer tous les notification
  recupererNotification(): Observable<any> {
    return this.http.get(AUTH_API + "recuperertouslesnotification");
}

 
  //permet de recuperer tous les notification
  recupererQuatresNotifsNotification(): Observable<any> {
    return this.http.get(AUTH_API + "recupererlesquatredernierenotification");
}


}
