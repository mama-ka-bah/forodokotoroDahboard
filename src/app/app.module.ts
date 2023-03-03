import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AjouterAdminComponent } from './ajouter-admin/ajouter-admin.component';
import { PrincipalComponent } from './principal/principal.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SidebareComponent } from './sidebare/sidebare.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NotificationComponent } from './notification/notification.component';
import { DetailNotificationComponent } from './detail-notification/detail-notification.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { AjouterPrevisionComponent } from './ajouter-prevision/ajouter-prevision.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { AjouterVarietesComponent } from './ajouter-varietes/ajouter-varietes.component';
import { ProduitsAgricoleComponent } from './produits-agricole/produits-agricole.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { AgriculteursEnattenteComponent } from './agriculteurs-enattente/agriculteurs-enattente.component';
import { TransporteursEnattenteComponent } from './transporteurs-enattente/transporteurs-enattente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { httpInterceptorProviders } from 'src/_helpers/http.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';










@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    AjouterAdminComponent,
    PrincipalComponent,
    AccueilComponent,
    SidebareComponent,
    DetailNotificationComponent,
    NotificationComponent,
    ParametrageComponent,
    AjouterPrevisionComponent,
    AjouterProduitComponent,
    AjouterVarietesComponent,
    ProduitsAgricoleComponent,
    UtilisateursComponent,
    AgriculteursEnattenteComponent,
    TransporteursEnattenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatNativeDateModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NgMultiSelectDropDownModule.forRoot()
    ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
