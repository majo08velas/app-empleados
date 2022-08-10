import { formatCurrency } from '@angular/common';
import { DeclarationListEmitMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './services/empleados.service';
import { ServicioEmpleadosService } from './services/servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  form_title = "Formulario registro";
  nombre:string="";
  title = 'Lista de empleados';
  apellido:string="";
  cargo:string="";
  salario:number=0;
  nuevo_empleado!: Empleado;
  registro=false;
  mensaje:string="";
  empleados:Empleado[]=[];

  constructor(private servicioEmpleados:ServicioEmpleadosService, private empleadoService:EmpleadosService){//parqa inyectar un servicio se coloca en el constructor
    //this.empleados=this.empleadoService.empleados;//se guarda el array empleados
  }
  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
  }

  guardarEmpleado(){
    this.registro=true;
    this.nuevo_empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.servicioEmpleados.muestraMensaje("Nombre del empleado: " + this.nuevo_empleado.nombre);
    this.empleadoService.agregarEmpleadoServicio(this.nuevo_empleado);
    this.mensaje="¡Empleado registrado correctamente!";
    console.log(this.empleadoService.empleados);
    this.clear();
  }

  clear(){
    this.nombre ="";
    this.apellido="";
    this.cargo="";
    this.salario=0;
  }
}
