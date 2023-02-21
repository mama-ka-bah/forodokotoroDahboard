import { Component, OnInit } from '@angular/core';
import { TransporteurService } from 'src/services/transporteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transporteurs-enattente',
  templateUrl: './transporteurs-enattente.component.html',
  styleUrls: ['./transporteurs-enattente.component.scss']
})
export class TransporteursEnattenteComponent implements OnInit{

  transporteurs:any;
  etat: any;
  action:boolean = false;
  resultatAction:any;

  constructor(private transporteurService: TransporteurService){
    
  }

  evenement(event:any){
      if(event.target.value === "encours"){
        this.recupererLesTransporteursEncours();
        this.action = true;
      }else if(event.target.value === "rejeter"){
        this.recupererLesTransporteursRejeter();
        this.action = false;
      }else{
        this.recupererLesTransporteurs();
        this.action = false;
      }
      

  }

  ngOnInit(): void {
    this.etat = "Fitre par status";
    this.recupererLesTransporteurs();
  }

  recupererLesTransporteurs(){
    this.transporteurService.recuperereLesTransporteur().subscribe(data =>{
      this.transporteurs = data;
    });
  }

  recupererLesTransporteursEncours(){
    this.transporteurService.recuperereLesTransporteurAvecDemandeEncours().subscribe(data =>{
      this.transporteurs = data;
    });
  }
  recupererLesTransporteursRejeter(){
    this.transporteurService.recuperereLesTransporteurAvecDemandeRjeter().subscribe(data =>{
      this.transporteurs = data;
    });
  }

  accepterTransporteur(numero:any){
  
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
          this.transporteurService.accepterTransporteur(numero).subscribe(data => {
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
             this.recupererLesTransporteursEncours();
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


    rejeterTransporteur(numero:any){
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
          this.transporteurService.rejeterTransporteur(numero).subscribe(data => {
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
             this.recupererLesTransporteursRejeter();
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
