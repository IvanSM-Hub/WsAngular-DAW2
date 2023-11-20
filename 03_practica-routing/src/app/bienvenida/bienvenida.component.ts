import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  nombre:string = 'Usuario2'
  direccion:string = 'Dirección2'

  constructor(private router:Router) {}

  public routingProgramatico(){
    console.log("Navegando...")
    this.router.navigate([ '/componente1', this.nombre, this.direccion])
  }

  public routingProgramaticoQueryParam(){
    console.log("Navegando con query param...")
    this.router.navigateByUrl(`/componente1?parametro1=${this.nombre}&parametro2=${this.direccion}`)
  }

  ngOnInit(): void {
  }

}
