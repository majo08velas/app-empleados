import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  /*El @Output es el decorador que indica que se va a emitir un dato,
    caracrerísticasEmpleados es el nombre del output
    new EventEmitter<string> es el tipo del output*/
  
  constructor() { }

  ngOnInit(): void {
  }

  /*El método agregarCaract es el que se encarga de emitir el dato
  una vez se introduzca algo en el input*/
  agregarCarac(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

}
