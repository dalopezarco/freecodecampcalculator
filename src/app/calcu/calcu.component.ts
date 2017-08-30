import { Component, OnInit } from '@angular/core';
declare var math: any;

@Component({
  selector: 'app-calcu',
  templateUrl: './calcu.component.html',
  styles: []
})
export class CalcuComponent implements OnInit {

  numtemp:string = "";
  funcionTemp = "";
  funcion:string ="";
  resultado:number = 0;

  resultFlag:boolean = true;
  operatorFlag:boolean = false;
  puntoFlag:boolean = false;


  value:string = ""

  constructor() { }

  ngOnInit() {
  }
  botonNum(numero:string){
    this.resultFlag = false;
    this.numtemp = this.numtemp + numero;
    this.operatorFlag = false;
    console.log(this.numtemp)
    if(this.numtemp.length>23){
      this.botonAC();
      alert("Te has pasado de números chaval!!!!");
    }
  }


  botonigual(){
    this.resultFlag = true;
    this.operatorFlag = false;
    this.puntoFlag = false;

    if(this.funcion){
        this.funcion = this.funcion + this.numtemp
        this.numtemp = ""
        this.resultado = math.round(math.eval(this.funcion),6)

    }else if (this.numtemp){
      let numerotemporal:number = 0;
      numerotemporal = math.eval(this.numtemp)
      this.numtemp =""
      this.resultado = numerotemporal;
    }
    // this.resultado = math.eval(this.funcion);
    this.funcion = "";
  }

  botonOperador(operador:string){
    this.resultFlag = false;
    this.puntoFlag = false;

     if(this.operatorFlag){
       let arr = this.funcion.split("");
       arr.pop();
       this.funcion = arr.join("")
       this.funcion = this.funcion + operador;
     }else {

       if ( this.numtemp){
         this.funcion = this.funcion + this.numtemp
       }
       //Si no tenemos numero temporal operamos con el resultado
       else if (this.resultado){
         this.funcion = this.funcion + String(this.resultado)
       }else {
         this.funcion += "0"
       }
         this.funcion = this.funcion + operador;
         this.numtemp = "";
         //Para cuando pulsemos dos veces en el operador que no de error
       }
        this.operatorFlag = true;
        console.log(this.funcion.length)
     }

     botonPunto(){
      this.resultFlag = false;
       this.operatorFlag = false;

       if(!this.numtemp){
         this.numtemp += "0"
       }

       this.numtemp += "."
       this.puntoFlag = true;
      }

  botonAC(){
    this.resultFlag = true;
    this.operatorFlag = false;
    this.puntoFlag = false;
    this.resultado = 0;
    this.numtemp = "";
    this.funcion = "";
  }

  botonCE(){
    this.numtemp = "";

  }
}
