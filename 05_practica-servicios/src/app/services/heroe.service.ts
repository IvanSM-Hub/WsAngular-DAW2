import { Injectable } from '@angular/core';
import { Heroe } from '../entitys/heroe'

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private contadorId:number = 1;
  private listaHeroes:Heroe[]=[];

  constructor() {
    
    let heroe:Heroe = new Heroe();
    
    //se invoca al set no al atributo, ya que es privado
    heroe.id=this.contadorId++;
    heroe.nombre="Natasha Romanoff";
    heroe.universo="MARVEL";
    this.listaHeroes.push(heroe);

    heroe = new Heroe();
    heroe.id=this.contadorId++;
    heroe.nombre="Batman";
    heroe.universo="DC";
    this.listaHeroes.push(heroe);
    
  }

  /**
    * Método que inserta un heroe en una lista generando su id
    * @param heroe a insertar
    */
  public insertar(heroe : Heroe) {
    heroe.id = this.contadorId++
    this.listaHeroes.push(heroe)
  }

  /**
   * Método que modifica un heroe de una lista si se encuentra dentro de ella
   * @param heroe a modificar
   * @returns true en caso de que se haya modificado, false en caso contrario
   */
  public modificar(heroe : Heroe): boolean{       
    for(let a=0; a<this.listaHeroes.length; a++){
      let heroeAux = this.listaHeroes[a]
      if(heroeAux.id == heroe.id){
        this.listaHeroes[a] = heroe
        return true;
      }
    }
    return false
  }

  /**
   * Método que borra un heroe a partir de un id
   * @param id del heroe que queremos borrar
   * @returns true en caso de que el id exista en la lista y se haya podido borrar, false en 
   * caso contrario.
   */
  public borrar(id : number) : boolean{    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == id){
        this.listaHeroes.splice(a,1)
        return true
      }
    }
    return false;
  }

  /**
   * Metodo que devuelve un Heroe de la lista a partir de su id
   * @param id 
   * @returns el heroe en caso de que hayamos encontrado su id, null en caso de que no exista el id
   * en la lista.
   */
  public acceder(id : number) : Heroe | null{    
    for(let a=0; a<this.listaHeroes.length; a++){
      if( this.listaHeroes[a].id == id){
        return this.listaHeroes[a]
      }
    }
    return null
  }

  /**
   * Método que devuelve todos los heroes en una lista
   * @returns la lista de heroes
   */
  public listar(): Heroe[]{
    return this.listaHeroes
  }

  ngOnInit() {

  }

}
