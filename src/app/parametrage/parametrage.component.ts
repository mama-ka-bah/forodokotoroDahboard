import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.component.html',
  styleUrls: ['./parametrage.component.scss']
})
export class ParametrageComponent implements OnInit{

  produit:boolean= true;
  admin:boolean =false;
  simulations:boolean= false;
  varietes:boolean = false;

  constructor(private el: ElementRef){}

  ngOnInit(): void {
    this.produit = true;
    this.admin =false;
    this.simulations = false;
    this.varietes = false;
  }

  afficheProduit(){
    this.produit = true;
    this.admin = false;
    this.simulations = false;
    this.varietes = false;
    this.el.nativeElement.querySelector('.tttt').scrollIntoView();

    console.log("boolean: "+ this.produit)
  }
  afficheAdmin(){
    this.produit = false;
    this.admin = true;
    this.simulations = false;
    this.varietes = false;
    this.el.nativeElement.querySelector('.tttt').scrollIntoView();

  }
  afficheSimulation(){
    this.produit = false;
    this.admin = false;
    this.simulations = true;
    this.varietes = false;
    this.el.nativeElement.querySelector('.tttt').scrollIntoView();

  }
  afficheVarietes(){
    this.produit = false;
    this.admin = false;
    this.simulations = false;
    this.varietes = true;
    this.el.nativeElement.querySelector('.tttt').scrollIntoView();

  }



}
