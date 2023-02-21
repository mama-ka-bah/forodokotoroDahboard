import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametreService } from 'src/services/parametre.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-prevision',
  templateUrl: './ajouter-prevision.component.html',
  styleUrls: ['./ajouter-prevision.component.scss']
})
export class AjouterPrevisionComponent implements OnInit{

  currentUser:any;
  //produitsAgricoles:any;
  resultatAjoutSimulation:any;
  erreur:any;
  lesvarietesPourLeProduitActive:any;
  lesProduitAgricoleRecuperer:any;

  rolutilisateur: string[] = [];
  admin:boolean = false;
  professionnel:boolean = false;
  superadmin:boolean = false;

  constructor(
    private storageService: TokenStorageService,
    private parametrageService: ParametreService,
    private router : Router
  ){
    this.myForm.get('produit')!.valueChanges.subscribe(value => {
      this.recupererLesSemencesProduitAgricole(value); 
    });
  }

  
  recupererTousLesProduitsAgricoles(){
    this.parametrageService.recupererProduitsAgricoles().subscribe(data =>{
      this.lesProduitAgricoleRecuperer = data;
      console.log("produit agricole " +JSON.stringify(this.lesProduitAgricoleRecuperer));
    })
  }

  recupererLesSemencesProduitAgricole(idproduit:any){
    this.parametrageService.recupererLesVarietesDunProduitAgricole(idproduit).subscribe(data =>{
      this.lesvarietesPourLeProduitActive = data;
      console.log("semence " + JSON.stringify(this.lesvarietesPourLeProduitActive));
    })
  }


  //l'objet form froup lié à mon formulaire dans le template
  myForm = new FormGroup({
    libelle: new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    delai: new FormControl('',  [Validators.required, Validators.min(1), Validators.max(1000000000)]),

    nombrepluie: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10000)]),
    produit: new FormControl('', [Validators.required]),
    varietes: new FormControl('', [Validators.required]),
});


  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    //this.recupererProduitsAgricoles();
    this.recupererTousLesProduitsAgricoles();


    this.rolutilisateur = this.currentUser.roles;

    if(this.rolutilisateur.includes("ROLE_ADMIN") == true){
      this.admin = true;
      this.superadmin = false;
      this.professionnel = false;
    }else if(this.rolutilisateur.includes("ROLE_SUPERADMIN")){
      this.superadmin = true;
      this.admin = false;
      this.professionnel = false;
    }else{
      this.professionnel = true;
      this.superadmin = false;
      this.admin = false;
    }
  }

  // recupererProduitsAgricoles(){
  //   this.parametrageService.recupererProduitsAgricoles().subscribe(data =>{
  //     this.produitsAgricoles = data;
  //   })
  // }
  

  //La fonction appeler lors de l'envoie de mon formulaire
 submitForm() {

  //verifie si le formulaire est valide
  if(this.myForm.valid) {
    const iduser = this.currentUser.id;

  const simulation = {
    "nom":this.myForm.controls.libelle.value,
    "delaijour":this.myForm.controls.delai.value,
    "nbrepluienecessaire":this.myForm.controls.nombrepluie.value,
    "varietes":{
      "id":this.myForm.controls.varietes.value
    },
   }      

        // Fermer le modal et retourner les données du formulaire à notre page
        Swal.fire({
          text: 'Etes vous sur d\'ajouter cette variete',
          showDenyButton: true,
          // showCancelButton: true,
          confirmButtonText: 'Ajouter',
          denyButtonText: `Annuler`,
          heightAuto:false,
          position:'center'
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {         
            this.parametrageService.ajouterSimulation(iduser, simulation).subscribe(data =>{
              this.resultatAjoutSimulation = data;
              console.log(data);

              ///si l'ajout du champ a marché
              if(this.resultatAjoutSimulation.status == 1){
                Swal.fire({
                  icon: 'success',
                  text: data.message,
                  // showConfirmButton: true,
                  timer: 2000,
                  customClass: {
                    container: 'small-text'
                  },
                  heightAuto:false,
                })
                this.myForm.reset();
                //this.router.navigate(['/forodokotoro/listProduits']);
              }else{
                Swal.fire({
                  icon: 'info',
                  text: data.message,
                  showConfirmButton: true,
                  // timer: 2000,
                  heightAuto:false,
                })
              }
            })                
          } 
        })
     //orrive là lorsque les champs nesont pas validé
    } else {
      this.erreur = true;
      // Afficher une erreur si les données sont manquantes
      console.log("veuillez remplir tous les champs");
  }
}

}
