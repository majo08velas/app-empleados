import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  form_title = "Formulario registro";
  nombre:string="";
  title = 'Lista de empleados';
  apellido:string="";
  cargo:string="";
  salario:number=0;
  nuevo_empleado!: Empleado;
  registro=false;
  mensaje:string="";
  empleados:Empleado[];
  //parqa inyectar un servicio se coloca en el constructor
  constructor( private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleadoService.encontrarEmpleados().subscribe(empleados => {
        console.log(empleados);
        this.empleados = Object.values(empleados);//los valores de empleados se van a guardar en el arreglo this.empleados
        this.empleadoService.setEmpleados(this.empleados);
    });
  }

  guardarEmpleado(){
    this.registro=true;
    this.nuevo_empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleadoService.agregarEmpleadoServicio(this.nuevo_empleado);
    this.mensaje="¡Empleado registrado correctamente!";
    console.log(this.empleadoService.empleados);
  }
}
