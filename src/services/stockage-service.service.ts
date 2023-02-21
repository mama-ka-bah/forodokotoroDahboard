import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockageServiceService {

  constructor() { }

  
  //le role de l'user
  public nombreDeNotificationNonLu = new BehaviorSubject<any>(null);
  public nombreDeNotificationNonLu$ = this.nombreDeNotificationNonLu.asObservable();
  
}
