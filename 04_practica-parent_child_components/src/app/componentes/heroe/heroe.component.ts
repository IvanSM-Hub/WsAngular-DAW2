import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/entidades/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  /*Para que un componente se pueda incializar nulo hay que añadir la cnfiguración "strictPropertyInitialization":false. Sino nos dará error al intentar incluir el objeto*/
  @Input() heroe:Heroe;

  constructor() { }

  ngOnInit(): void {
  }

}
