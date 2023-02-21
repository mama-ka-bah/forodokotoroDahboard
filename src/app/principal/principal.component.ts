import { IMAGE_CONFIG } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NotificationService } from 'src/services/notification.service';
import { StockageServiceService } from 'src/services/stockage-service.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UtilisateursService } from 'src/services/utilisateurs.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  currentUser:any;
  rolutilisateur: string[] = [];
  admin:boolean = false;
  professionnel:boolean = false;
  superadmin:boolean = false;
  lesNotifications:any;

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
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

  constructor(
    private utilisateurService: UtilisateursService,
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private notificationService: NotificationService,
    private tockenservice: TokenStorageService,
    public stockageService: StockageServiceService 
  ){}

  activedAgri:boolean =false;
  activedTrans:boolean =false;

  activationAgri(){
    this.activedAgri = true;
    this.activedTrans = false;
    console.log("agri")
  }

  autre(){
    this.activedAgri = false;
    this.activedTrans = false;
    console.log("trans")
  }

  activationTrans(){
    this.activedAgri = false;
    this.activedTrans = true;
    console.log("trans")
  }

  //deconnexion
  deconnexion(){
    this.tokenStorageService.clean();
      this.router.navigateByUrl("/connexion");
  }


 
  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }

    //permet de recuperer toutes les notifications 
    recupererNotificationNonLu(){
      this.notificationService.recupererNotification().subscribe(data =>{
        this.lesNotifications = data;
      })
    }

 


  

}
