import { Component, OnInit } from '@angular/core';
import { AgriculteurService } from 'src/services/agriculteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agriculteurs-enattente',
  templateUrl: './agriculteurs-enattente.component.html',
  styleUrls: ['./agriculteurs-enattente.component.scss']
})
export class AgriculteursEnattenteComponent implements OnInit{

  agriculteurs:any;
  etat: any;
  action:boolean = false;
  resultatAction:any;

  constructor(private agriculteurService: AgriculteurService){
    
  }

  evenement(event:any){
      if(event.target.value === "encours"){
        this.recupererLesAgriculteursEncours();
        this.action = true;
      }else if(event.target.value === "rejeter"){
        this.recupererLesAgriculteursRejeter();
        this.action = false;
      }else{
        this.recupererLesAgriculteurs();
        this.action = false;
      }
      

  }

  ngOnInit(): void {
    this.etat = "Fitre par status";
    this.recupererLesAgriculteurs();
  }

  recupererLesAgriculteurs(){
    this.agriculteurService.recuperereLesAgriculteurs().subscribe(data =>{
      this.agriculteurs = data;
    });
  }

  recupererLesAgriculteursEncours(){
    this.agriculteurService.recuperereLesAgriculteursAvecDemandeEncours().subscribe(data =>{
      this.agriculteurs = data;
    });
  }
  recupererLesAgriculteursRejeter(){
    this.agriculteurService.recuperereLesAgriculteursAvecDemandeRjeter().subscribe(data =>{
      this.agriculteurs = data;
    });
  }

  accepterAgriculteur(numero:any){
  
      // Fermer le modal et retourner les données du formulaire à notre page
      Swal.fire({
        text: 'Etes vous sur d\'accepter cette demande',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Accepter',
        denyButtonText: `Annuler`,
        heightAuto:false,
        position:'center'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {         
          this.agriculteurService.accepterAgriculteur(numero).subscribe(data => {
              this.resultatAction = data;
            console.log(data);

            ///si l'ajout du champ a marché
            if(this.resultatAction.status == 1){
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
             this.recupererLesAgriculteursEncours();
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

    }


    rejeterAgriculteur(numero:any){
      // Fermer le modal et retourner les données du formulaire à notre page
      Swal.fire({
        text: 'Etes vous sur d\'accepter cette demande',
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'Rejeter',
        denyButtonText: `Annuler`,
        heightAuto:false,
        position:'center'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {         
          this.agriculteurService.rejeterAgriculteur(numero).subscribe(data => {
              this.resultatAction = data;
            console.log(data);

            ///si l'ajout du champ a marché
            if(this.resultatAction.status == 1){
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
             this.recupererLesAgriculteursRejeter();
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

    }

  }


  // get retourneLesElementFiltre() {
  //   return this.agriculteurs.statusdemande.filter((agriculteur: { statusdemande: string; }) => {
  //     return agriculteur.statusdemande.toLowerCase().includes(this.etat.toLowerCase());
  //   });
  // }


