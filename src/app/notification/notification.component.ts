import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/services/notification.service';
import { StockageServiceService } from 'src/services/stockage-service.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit{

  currentUser:any;
  lesNotifications:any;
  p: number = 1;
  //nombreDeNotificationNonLu:any;

  constructor(
    private notificationService: NotificationService,
    private tockenservice: TokenStorageService,
    private stockageService: StockageServiceService 
  ){}

  ngOnInit(): void {
    this.currentUser = this.tockenservice.getUser();
    this.recupererNotificationUser();
  }


  //  //permet de recuperer toutes les notifications non lus d'un user
  //  recupererNotificationNonLu(){
  //   this.notificationService.recupererNotificationNonLuUser(this.currentUser.id).subscribe(data =>{
  //     this.lesNotificationsNonLus = data;
  //   })
  // }

  //permet de recuperer toutes les notification d'un user
  recupererNotificationUser(){
    this.notificationService.recupererNotification().subscribe(data =>{
      this.lesNotifications = data;
    })
  }

  //  recupererNombreDENotifNonLus(){
  //   this.notificationService.recupererNotificationNonLuDunUser(this.currentUser.id).subscribe(value => {

  //     this.stockageService.nombreDeNotificationNonLu.next(value);

  //     this.stockageService.nombreDeNotificationNonLu$.subscribe(value => {
  //       this.nombreDeNotificationNonLu = value;
  //     });

  //   });
  // }


  //permet de marquer une notification comme lu
  // marquerUneNotifiCommeLu(idNotif:any, notification:any){

  //   if(notification.lu == false){

  //     const notis = {
  //       "lu":true
  //     }
      
  //     this.notificationService.marquerLesNotificationDunUserCommeLus(idNotif, notis).subscribe(data =>{
  //     })
  
  //    setTimeout(() => {
  //    this.recupererNotificationNonLu();
  //    this.recupererNombreDENotifNonLus();
  //   }, 1000);
  //   }
    
  // }

  

}
