import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametreService } from 'src/services/parametre.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss']
})
export class AjouterProduitComponent implements OnInit{

  erreur:any;
  file:any;
  CurrentUser:any;
  resultatAjoutProduit:any;


  constructor(
    private storageService: TokenStorageService,
    private parametrageService: ParametreService,
    private router : Router,

  ){}

  ngOnInit(): void {
    this.CurrentUser = this.storageService.getUser();
  }

  form = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]),
    subvention: new FormControl(null),

    description: new FormControl('', [Validators.required, Validators.minLength(200), Validators.maxLength(500)]),

    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });


  get fstocks() {
    return this.form.controls;
  }
  
  
  onFileChangeProduit(event: any) {
  
    if (event.target.files.length > 0) {
  
      const file = event.target.files[0];
  
      this.form.patchValue({
  
        fileSource: file
  
      });
  
    }
  }

    //La fonction appeler lors de l'envoie de mon formulaire
    submitForm() {

      //verifie si le formulaire est valide
      if(this.form.valid) {

        this.file = this.form.controls.fileSource.value;
        const iduser = this.CurrentUser.id;



          const produitReçu = [ 
              {
                "nom":this.form.controls.nom.value,
                "description":this.form.controls.description.value,
                "statusubvention":this.form.controls.subvention.value,
               }      
        ]

        const data:FormData=new FormData();
        data.append('file', this.file);
        data.append('produitreçu', JSON.stringify(produitReçu).slice(1,JSON.stringify(produitReçu).lastIndexOf(']')));

            // Fermer le modal et retourner les données du formulaire à notre page
            Swal.fire({
              text: 'Etes vous sur d\'ajouter ce produit',
              showDenyButton: true,
              // showCancelButton: true,
              confirmButtonText: 'Ajouter',
              denyButtonText: `Annuler`,
              heightAuto:false,
              position:'center'
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {         
                this.parametrageService.ajouterProduit( iduser, data).subscribe(data =>{
                  this.resultatAjoutProduit = data;
                  console.log(data);

                  ///si l'ajout du champ a marché
                  if(this.resultatAjoutProduit.status == 1){
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
                    this.router.navigate(['/forodokotoro/listProduits']);
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
