import { IMAGE_CONFIG } from '@angular/common';
import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent {
 
  open(){
    $('#sidebar').toggleClass('active');
    //console.log('fffffff')
  }
}
