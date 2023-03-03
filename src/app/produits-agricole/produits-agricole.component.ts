import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParametreService } from 'src/services/parametre.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-produits-agricole',
  templateUrl: './produits-agricole.component.html',
  styleUrls: ['./produits-agricole.component.scss']
})
export class ProduitsAgricoleComponent implements OnInit{

  lesProduitAgricoleRecuperer:any;
  p: number = 1;

  ngOnInit(): void {
    this.recupererTousLesProduitsAgricoles();
  }
  constructor(
    private storageService: TokenStorageService,
    private parametrageService: ParametreService,
    private router : Router
  ){}

  recupererTousLesProduitsAgricoles(){
    this.parametrageService.recupererProduitsAgricoles().subscribe(data =>{
      this.lesProduitAgricoleRecuperer = data;
      console.log("produit agricole " +JSON.stringify(this.lesProduitAgricoleRecuperer));
    })
  }

}
