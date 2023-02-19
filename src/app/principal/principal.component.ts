import { IMAGE_CONFIG } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(){}

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

 
  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }
}
