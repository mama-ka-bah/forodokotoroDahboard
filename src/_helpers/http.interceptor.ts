import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/services/token-storage.service'; 

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {


constructor(private stockageService: TokenStorageService){}

userToken:any

intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.url.includes('signin') || req.url.includes('signup') || req.url.includes('api.openweathermap.org')){
      return next.handle(req);
    }else{
      this.userToken = this.stockageService.getUser().token;
      console.log("le token qui sera envoye dans header:  "+ this.userToken);
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.userToken)
      });
      return next.handle(authReq);
    }
  }

}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true },
];