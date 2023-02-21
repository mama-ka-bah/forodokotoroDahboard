import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8081/stocks/';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  recupererStockVendu():Observable<any>{
    return this.http.get(AUTH_API + "recupererstockvendu");
  }

  recupererStockRestant():Observable<any>{
    return this.http.get(AUTH_API + "recupererstockrestant");
  }
}
