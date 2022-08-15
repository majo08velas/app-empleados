import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  form_title = "Formulario registro";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  salario:number=0;
  empleado_actualizado!: Empleado;
  registro=false;
  mensaje:string="";
  empleados:Empleado[]=[];
  i:number;

  constructor(private router:Router,private route:ActivatedRoute,private empleadoService:EmpleadosService) {
  }

  ngOnInit(): void {
    this.empleados=this.empleadoService.empleados;
    this.i = this.route.snapshot.params['id'];
    let empleado:Empleado = this.empleadoService.encontrarEmpleado(this.i);
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.cargo = empleado.cargo;
    this.salario = empleado.salario;
    console.log(empleado);
  }

  volverHome(){
    this.router.navigate(['']);
  }

  actualizarEmpleado(){
    let empleado_actualizado = new Empleado(this.nombre,this.apellido,this.cargo,this.salario);
    this.empleadoService.actualizarEmpleado(empleado_actualizado,this.i);
    this.router.navigate(['']);
  }

  eliminarEmpleado(){
    this.empleadoService.eliminarEmpleado(this.i);
    this.router.navigate(['']);
  }

}
