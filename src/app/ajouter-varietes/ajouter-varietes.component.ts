import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametreService } from 'src/services/parametre.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-varietes',
  templateUrl: './ajouter-varietes.component.html',
  styleUrls: ['./ajouter-varietes.component.scss']
})
export class AjouterVarietesComponent implements OnInit{

  produitsAgricoles:any;
  currentUser:any;
  erreur:any;
  file:any;
  resultatAjoutVariete:any;

  rolutilisateur: string[] = [];
  admin:boolean = false;
  professionnel:boolean = false;
  superadmin:boolean = false;

  constructor(
    private storageService: TokenStorageService,
    private parametrageService: ParametreService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.recupererProduitsAgricoles();

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
  

   //l'objet form froup lié à mon formulaire dans le template
   myForm = new FormGroup({
    nom: new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    description: new FormControl('',  [Validators.required, Validators.minLength(2), Validators.maxLength(500)]),

    cycle: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000000)]),
    taillefinal: new FormControl('', [Validators.required, Validators.min(10), Validators.max(1000000000)]),
    rendement: new FormControl('', [Validators.required, Validators.min(1), Validators.max(1000000000)]),
    lien: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]),
    produit: new FormControl('',  [Validators.required]),

    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
});



get fstocks() {
  return this.myForm.controls;
}


onFileChangeVariete(event: any) {

  if (event.target.files.length > 0) {

    const file = event.target.files[0];

    this.myForm.patchValue({

      fileSource: file

    });

  }

}

 //La fonction appeler lors de l'envoie de mon formulaire
 submitForm() {

  //verifie si le formulaire est valide
  if(this.myForm.valid) {

    this.file = this.myForm.controls.fileSource.value;
    const iduser = this.currentUser.id;


    const idproduit = this.myForm.controls.produit.value;

const varieteReçue = [ 
  {
    "nom":this.myForm.controls.nom.value,
    "description":this.myForm.controls.description.value,
    "cycle":this.myForm.controls.cycle.value,
    "resultatparkilo":this.myForm.controls.rendement.value,
    "taillefinal":this.myForm.controls.taillefinal.value,
    "lien":this.myForm.controls.lien.value,
   }      
]

    

    const data:FormData=new FormData();
    data.append('file', this.file);
    data.append('varieteReçue', JSON.stringify(varieteReçue).slice(1,JSON.stringify(varieteReçue).lastIndexOf(']')));

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
            this.parametrageService.ajouterVariete(iduser, idproduit, data).subscribe(data =>{
              this.resultatAjoutVariete = data;
              console.log(data);

              ///si l'ajout du champ a marché
              if(this.resultatAjoutVariete.status == 1){
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

recupererProduitsAgricoles(){
  this.parametrageService.recupererProduitsAgricoles().subscribe(data =>{
    this.produitsAgricoles = data;
  })
}

}
