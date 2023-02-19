import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateursService } from 'src/services/utilisateurs.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { IDropdownSettings } from 'ng-multiselect-dropdown';





@Component({
  selector: 'app-ajouter-admin',
  templateUrl: './ajouter-admin.component.html',
  styleUrls: ['./ajouter-admin.component.scss']
})

export class AjouterAdminComponent implements OnInit{
  
//l'objet form froup lié à mon formulaire dans le template
//ici on precise que les champs codes ne peuvent prendre que des chiffres comprise entre 0 et 9
form = new FormGroup({
  username: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
  nomComplet: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
  adresse: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
  roles: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30),  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
  confPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
});

//les booleans conteant l'etat et le message  de la connexion
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';

nomComplet:any;
email:any;
roles:any[] = [];
password:any;
username:any;
confPassword:any;

valeurErreur:any;
erreur:boolean | undefined;


dropdownList: any[] =[];
selectedItems : any[] =[];
dropdownSettings = {};

mesroles: string[] =[];

  ngOnInit(): void {

    this.dropdownList = [
      { text: "Administrateur", role: "admin" },
      { text: "Professionnel", role: "professionnel" },
    ];

    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "role",
      textField: "text",
      // selectAllText: "Select All",
      // unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      // allowSearchFilter: true
    };

  }

  onItemSelect(item: any) {
    console.log(item.role);
    this.mesroles.push(item.role);
  }
  onSelectAll(items: any) {
    console.log(items.role);
  }

  constructor(
    private utilisateurService:UtilisateursService,
    private router : Router,
  ){}

  
  //La fonction appleleé lorsqu'on prend le bouttton envoyé
  onSubmit(): void {
    //recuperation des données envoyes par l'utilisateur dans des constantes differents
   
    this.username = this.form.controls.username.value;
    this.nomComplet = this.form.controls.nomComplet.value;
    this.email = this.form.controls.email.value;
    this.password = this.form.controls.password.value;
    this.confPassword = this.form.controls.confPassword.value;

    if(this.password == this.confPassword && this.form.valid)
    {
      console.log(this.mesroles);
      const donneesuser = [{
        "username":this.form.controls.username.value,
        "nomcomplet":this.form.controls.nomComplet.value,
        "email":this.form.controls.email.value,
        "password":this.form.controls.password.value,
        "adresse":this.form.controls.adresse.value,
        "role":this.mesroles,
      }]

      console.table(donneesuser);


       //on fait appel au service de l'incription en lui envoyant les constantes declarées ci-dessus
    this.utilisateurService.register(donneesuser).subscribe({
      //on rentre ici lorsque tout se passe bien
      next: data => {
        console.log(data);
        //connexion reçue à true
        this.isSuccessful = true;
        //connexion echoué à false
        this.isSignUpFailed = false;

        if(data.status == 0){
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: data.message,
            heightAuto:false
          })
        }else{
          Swal.fire({
            icon: 'success',
            title: 'Succcès',
            text: 'Utilisateur ajouté avec suucès!',
            heightAuto:false
          });
          this.router.navigateByUrl('/forodokotoro/utilisateurs');
        }
        
      },
      //on arrive ici lorsqu'il ya eu une erreur de connexion
      error: err => {
        //on recupere l'erreur
        this.errorMessage = err.error.message;
        //on est l'inscription echoué à false
        this.isSignUpFailed = true;
      }
    });
    }else if(this.password != this.confPassword && this.password.length >= 6 && this.confPassword.length >= 6){

      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Mot de passe differents !',
        heightAuto:false
      });
      
      this.erreur=true
      this.valeurErreur = "Mot de passe differents";
    }else{

    }
   
  }


}
