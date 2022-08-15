import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';


@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent implements OnInit {

  form_title = "Formulario registro";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  nuevo_empleado!: Empleado;
  registro=false;
  mensaje:string="";
  empleados:Empleado[]=[];
  indice:number;

  constructor(private router:Router,private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
  }

  volverHome(){
    this.router.navigate(['']);

  }

  guardarEmpleado(){
    this.registro=true;
    this.nuevo_empleado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleadoService.agregarEmpleadoServicio(this.nuevo_empleado);
    this.mensaje="¡Empleado registrado correctamente!";
    console.log(this.empleadoService.empleados);
    this.router.navigate(['']);
  }
}
