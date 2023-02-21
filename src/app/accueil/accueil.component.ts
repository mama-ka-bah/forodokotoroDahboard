import { Component, OnInit } from '@angular/core';
import { AgriculteurService } from 'src/services/agriculteur.service';
import { CommunauteService } from 'src/services/communaute.service';
import { NotificationService } from 'src/services/notification.service';
import { StockService } from 'src/services/stock.service';
import { TransporteurService } from 'src/services/transporteur.service';
import { UtilisateursService } from 'src/services/utilisateurs.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit{
  utilisateurs:any;
  transporteurs:any;
  agriculteurs:any;
  lesPublivationsOrdonnes:any;
  stockRestant:any;
  stockVendu:any;
  lesChampActives:any;
  lesParserelle:any;
  lesCultives:any;

  notifsRecent:any;


  constructor(
    private utilisateurService: UtilisateursService,
    private transporteurService: TransporteurService,
    private agriculteurService: AgriculteurService,
    private communauteService: CommunauteService,
    private stockService: StockService,
    private notificationService: NotificationService

    ){}

  ngOnInit(): void {
    this.recupererTousLesUtilisateurs();
    this.recupererLesTransporteurs();
    this.recupererLesAgriculteurs();
    this.recueperLesPublications();
    this.recupererStockRestant();
    this.recupererStockVendu();
    this.recueperLesChamp();
    this.recueperLesParserelle();
    this.recueperLesCultive();
    this. recupererQuatreDernierNotif();
  }

  recupererTousLesUtilisateurs(){
    this.utilisateurService.recupererTousLesUtilisateurs().subscribe(data =>{
      this.utilisateurs = data;
    })
  }

  recupererLesTransporteurs(){
    this.transporteurService.recuperereLesTransporteur().subscribe(data =>{
      this.transporteurs = data;
    });
  }

  recupererLesAgriculteurs(){
    this.agriculteurService.recuperereLesAgriculteurs().subscribe(data =>{
      this.agriculteurs = data;
    });
  }

  recupererStockRestant(){
    this.stockService.recupererStockRestant().subscribe(data =>{
      this.stockRestant = data;
    })
  }

  recupererStockVendu(){
    this.stockService.recupererStockVendu().subscribe(data =>{
      this.stockVendu = data;
    })
  }

  recueperLesPublications(){
    this.communauteService.recupererToutesLesPublicationsOrdonneesParDatePub().subscribe(data =>{
      this.lesPublivationsOrdonnes = data;
    })
  }

  recueperLesChamp(){
    this.agriculteurService.recupererTousLesChamp().subscribe(data =>{
      this.lesChampActives = data;
    })
  }

  recueperLesParserelle(){
    this.agriculteurService.recupererTousLesChamp().subscribe(data =>{
      this.lesParserelle = data;
    })
  }

  recueperLesCultive(){
    this.agriculteurService.recupererTousLesCultive().subscribe(data =>{
      this.lesCultives = data;
    })
  }

  recupererQuatreDernierNotif(){
    this.notificationService.recupererQuatresNotifsNotification().subscribe(data =>{
      this.notifsRecent = data;
    })
  }

}
