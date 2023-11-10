import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  num1:number=0;
  num2:number=0;
  resultado:number=0;
  warning:string="";
  styleWarning:string="";

  public sumar(){
    this.resultado=this.num1+this.num2;
  }

  public restar(){
    this.resultado=this.num1-this.num2;
  }

  public multiplicar(){
    this.resultado=this.num1*this.num2;
  }

  public dividir(){
    this.resultado=this.num1/this.num2;
  }

  public comprobacionOperandos() {
    
    if(this.num1!=0 && this.num2!=0){

      this.warning="Operación permitida";
      this.styleWarning="ok";

    }else{

      this.warning="Operación NO permitida";
      this.styleWarning="warning";

    }
  
  }

}
