import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  nombre:string=''
  direccion:string=''

  parametroQuery1:string=''
  parametroQuery2:string=''
  mostrar=false


  constructor(route:ActivatedRoute) {
    
    console.log("Creando Componente1")
    console.log('nombre: ${this.nombre}')

    this.nombre =route.snapshot.params["nombre"]
    this.direccion =route.snapshot.params["direccion"]

    this.parametroQuery1=route.snapshot.queryParams["parametro1"]
    this.parametroQuery2=route.snapshot.queryParams["parametro2"]
    console.log(this.parametroQuery1)

    if(this.parametroQuery1 != null){
      this.mostrar = true
    }

  }

  ngOnInit(): void {
  }

}
