import { formatCurrency } from '@angular/common';
import { DeclarationListEmitMode } from '@angular/compiler';
import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  form_title = "Formulario registro";
  nombre:string="";
  title = 'Lista de empleados';
  apellido:string="";
  cargo:string="";
  salario:number=0;
  nuevo_empleado!: Empleado;

  empleados:Empleado[]=[
    new Empleado("Juan","Salazar","Administrador",1000),
    new Empleado("Simón","López","Aseador",800),
    new Empleado("María","Aranguren","Cajera",900),
    new Empleado("José","Torres","Director",2000),
  ];

  registro=false;
  mensaje:string="";

  guardarEmpleado(){
    this.registro=true;
    this.nuevo_empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleados.push(this.nuevo_empleado);
    this.mensaje="¡Empleado registrado correctamente!";
    console.log(this.empleados);
    this.clear();
  }

  clear(){
    this.nombre ="";
    this.apellido="";
    this.cargo="";
    this.salario=0;
  }
}
