import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgriculteursEnattenteComponent } from './agriculteurs-enattente/agriculteurs-enattente.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NotificationComponent } from './notification/notification.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProduitsAgricoleComponent } from './produits-agricole/produits-agricole.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { TransporteursEnattenteComponent } from './transporteurs-enattente/transporteurs-enattente.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"connexion",
    pathMatch:"full"
  },

  {path:"forodokotoro",component:PrincipalComponent,
  children:[
    { path:'accueil',component:AccueilComponent}, 
    { path:'notification',component:NotificationComponent },
    { path:'parametrage',component:ParametrageComponent},
    { path:'utilisateurs',component:UtilisateursComponent},
    { path:'listProduits',component:ProduitsAgricoleComponent},
    { path:'agriculteur-attente',component:AgriculteursEnattenteComponent},
    { path:'transporteurs-attente',component:TransporteursEnattenteComponent}
  ]
},

{ path:'utilisateurs',component:UtilisateursComponent,
  
    children:[
      { path:'agriculteur-attente',component:AgriculteursEnattenteComponent},
      { path:'transporteurs-attente',component:TransporteursEnattenteComponent}
    ]
    },

  
  { path:'connexion',component:ConnexionComponent }, 
  { path:'ajout-admin',component:AjouterAdminComponent },
  { path:'sidebare',component:SidebareComponent }, 
];

@NgModule({
  imports: [
    // RouterModule.forRoot([ { name: 'popup', component: ConfirmDialogComponent}]),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
