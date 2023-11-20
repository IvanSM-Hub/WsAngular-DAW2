import { Component, OnInit } from '@angular/core';
import {Heroe} from 'src/app/entidades/heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  listaHeroes:Heroe[]=[];
  heroe:Heroe|null =null;

  insertarDeshabilitado:boolean=false;
  modificarBorrarDeshabilitado:boolean=true;

  nombreObligatorio:boolean=true;
  universoObligatorio:boolean=true;

  id:number=0;
  nombre:string="";
  universo:string="";

  constructor() {

    let heroe:Heroe
    
    heroe = new Heroe("Capitán Amaerica","MARVEL");
    this.listaHeroes.push(heroe);

    heroe = new Heroe("Superman","DC");
    this.listaHeroes.push(heroe);

  }

  /**
   * Inserta un objeto de la clase heroe en la listaHeroes[], además de comprobar que en el formulario no se le hayan pasado datos que no sean correctos.
   */
  public insertar () {
    if(!this.hayErroresEnFormulario()){
      
      this.heroe=new Heroe(this.nombre,this.universo)
      
      console.log('Insertando Heroe: ${this.heroe.toString()}')
      this.listaHeroes.push(this.heroe)
      this.vaciar()
      console.log("Heroe Insertado")

    }
  }

  /**
   * Método que vacía los campos de los formularios, resetea los mensajes de error y habilita el botón insertar
   */
  public vaciar(){
    console.log("vaciando...");
    this.id=0;
    this.nombre="";
    this.universo="";

    this.insertarDeshabilitado=false;
    this.modificarBorrarDeshabilitado=true;

    this.ocultarMensajesError();
  }

  /**
   * Método que comprueba si los campos del formulario están vacios,
   * @returns True en caso de que los campos nombre o universo estén vacios. false en caso contrario
   */
  public hayErroresEnFormulario():boolean{
    let error:boolean=false;
    this.ocultarMensajesError();

    if(this.nombre.trim().length==0){
      this.nombreObligatorio=false;
      error=true;
    }

    if(this.universo.trim().length==0){
      this.nombreObligatorio=false;
      error=true;
    }

    return error;

  }

  /**
   * Método que carga en el formuloario el heroe elegido en la tabla de la lista de heroes.
   * Una vez elegido el heroe, podemos modificarlo o borrarlo, pero no insertarlo.
   * El botón de insertar se deshabilitará, pero se habilitarán los botones de modificar y borrar.
   * @param h que representa el heroe que queremos cargar en el formulario.
   */
  public seleccionar(h:Heroe):void{
    
    console.log("seleccionado...")
    this.ocultarMensajesError()

    this.id=h.id;
    this.nombre=h.nombre;
    this.universo=h.universo;

    this.insertarDeshabilitado=true;
    this.modificarBorrarDeshabilitado=false;

    console.log("Heroe seleccionado")

  }

  /**
   * Método que oculta los mensajes de error del formulario.
   */
  public ocultarMensajesError(){
    this.nombreObligatorio=true
    this.universoObligatorio=true
  }

  /**
   * Método que modifica los datos del heroe que hayamos seleccionado previamente de la listaHeroes[]
   */
  public modificar(){
    
    if(!this.hayErroresEnFormulario()){
      
      for(let i=0; i<this.listaHeroes.length;i++){
        
        let heroeAux : Heroe = this.listaHeroes[i];
        
        if(heroeAux.id==this.id){
          
          this.listaHeroes[i].nombre=this.nombre;
          this.listaHeroes[i].universo=this.universo;
          
          break;
        
        }

      }
      
      console.log("Modificando..."+this.heroe?.toString());
      
      this.vaciar();
    
    }

  }

  /**
   * Borrará el heroe seleccionado en la listaHeroes[]
   */
  public borrar(){

    for(let i=0; i<this.listaHeroes.length;i++){

      if(this.listaHeroes[i].id==this.id){

        this.listaHeroes.splice(i,1);
        
        break;

      }

    }

    this.vaciar();
    console.log("borrando..."+this.id);

  }

  ngOnInit(): void {
  }

}
