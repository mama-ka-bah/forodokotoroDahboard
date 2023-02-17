import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UtilisateursService } from 'src/services/utilisateurs.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  envoyer:boolean = false;

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    sesouvenir: new FormControl(false),
  });

  constructor(private tokenStorage: TokenStorageService,
    private utilisateursService: UtilisateursService,
    private router : Router,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.envoyer = true;

    const username = this.form.controls.username.value;
    const password = this.form.controls.password.value;

    this.spinner.show();
    this.utilisateursService.login(username, password).subscribe({
      next: data => {
       
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.tokenStorage.saveUser(data);
        this.roles = this.tokenStorage.getUser().roles;
        console.log(data);
        
        if(this.isLoggedIn){
          this.router.navigateByUrl('/forodokotoro/accueil');
          //this.reloadPage();
       }
      },
        error: err => {
          //en cas d'erreur d'erreur
          this.errorMessage = err.error.message;
          //et on met est authentifié à false
          this.isLoginFailed = true;
        }
      });

      this.spinner.hide();
  }

  reloadPage(): void {
    window.location.reload();
  }

}
