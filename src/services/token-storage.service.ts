import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  //permet de supprimer les données contenant sessionStorage
  clean(): void {
    window.sessionStorage.clear();
  }

  //permet d'enregistrer l'user dans sessionStorrage
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));


    // window.sessionStorage.removeItem(TOKEN_KEY);
    // window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(user.token));
  }

  //permeet de recuperer user dans sessionStorrage
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }



  SaveJwts(jwts:any){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(jwts));
  }

  GetJwts(){

    const jwts = window.sessionStorage.getItem(TOKEN_KEY);
    if (jwts) {
      return  JSON.parse(jwts);
    }

    return {};

  }



  //verifie si l'utilisateur est connecter ou non
  public isLoggedIn(): boolean {
    //recuperer utilisateur dans session storage
    const user = window.sessionStorage.getItem(USER_KEY);
    //si utilisateur existe on retourne true
    if (user) {
      return true;
    }
    //sinon on retourne false
    return false;
  }








 
}
